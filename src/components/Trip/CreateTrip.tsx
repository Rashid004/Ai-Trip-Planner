import { useState } from "react";
import { SelectBudgetOptions, SelectTravelList } from "../../const/option";
import PhotonAutocomplete from "../common/PhotonAutocomplete";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { generateTripPlan } from "../../service/gemini";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { handleSignInWithGoogle } from "../../service/auth";
import { useLocalUser, UserSelection } from "../../hooks/useLocalUser";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { createTrip } from "../../service/supabaseTripService";
import { TripRecord } from "../../types/trip";

const CreateTrip = () => {
  const [formData, setFormData] = useState({
    destination: "",
    duration: 0,
    budget: "",
    travelList: "",
  });
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const user = useLocalUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGenerateTrip = async () => {
    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (
      !formData.destination ||
      !formData.duration ||
      !formData.budget ||
      !formData.travelList
    ) {
      toast("Please fill in all the fields to generate your trip.");
      return;
    }

    if (Number(formData.duration) > 15 || Number(formData.duration) < 1) {
      toast("Duration must be between 1 and 15 days.");
      return;
    }

    try {
      setLoading(true);

      const tripData = await generateTripPlan(formData);
      await handleAddTrip(tripData, formData, user.email);
      toast.success("Trip successfully generated and saved!");
      setFormData({
        destination: "",
        duration: 0,
        budget: "",
        travelList: "",
      });
    } catch (error) {
      console.error("Trip generation failed:", error);
      toast.error("Failed to generate your trip. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddTrip = async (
    tripData: TripRecord,
    formData: UserSelection,
    userEmail: string,
  ) => {
    try {
      const id = uuidv4();
      await createTrip(id, tripData, formData, userEmail);
      navigate(`/view-trip/${id}`);
    } catch (err) {
      console.error("Error saving trip:", err);
      throw new Error("Failed to save trip to database");
    }
  };
  return (
    <section className="section-container flex flex-col gap-12 py-16">
      <div>
        <h2 className="text-foreground text-2xl font-semibold md:text-3xl">
          Tell us your travel preferences 🏕️🌴
        </h2>
        <p className="mt-2 text-base text-gray-500 md:text-lg">
          Provide a few basic details, and our AI trip planner will generate a
          personalized itinerary tailored to your interests and travel style.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex w-full flex-col gap-3">
          <h2 className="label-title">What destination do you have in mind?</h2>
          <PhotonAutocomplete
            value={formData.destination}
            onSelect={(val) =>
              setFormData((prev) => ({ ...prev, destination: val }))
            }
          />
        </div>

        <div className="flex w-full flex-col gap-3">
          <h2 className="label-title">
            How many days are you planning for your trip?
          </h2>
          <Input
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g. 3"
            type="number"
            className="form-input"
          />
        </div>

        <div className="flex w-full flex-col gap-3">
          <h2 className="label-title">What is your budget?</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {SelectBudgetOptions.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, budget: item.title }))
                }
                className={`card-box ${
                  formData.budget === item.title
                    ? "border-primary shadow-lg ring-2"
                    : ""
                }`}
              >
                <div className="text-4xl md:text-5xl">{item.icon}</div>
                <p className="card-title">{item.title}</p>
                <p className="card-sub">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-3">
          <h2 className="label-title">
            Who do you plan on traveling with on your next adventure?
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {SelectTravelList.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, travelList: item.title }))
                }
                className={`card-box ${
                  formData.travelList === item.title
                    ? "border-primary shadow-lg ring-2"
                    : ""
                }`}
              >
                <div className="text-4xl md:text-5xl">{item.icon}</div>
                <p className="card-title">{item.title}</p>
                <p className="card-sub">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          className="mt-8 disabled:cursor-not-allowed"
          disabled={loading}
          onClick={handleGenerateTrip}
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="h-8 w-8 animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription className="text-start">
              <img src="/icons/logo.svg" alt="logo" />

              <DialogTitle className="text-red-01 mt-3 flex items-center gap-2 text-xl font-bold">
                Sign In with Google
              </DialogTitle>
              <p className="mt-2 text-base font-normal text-gray-500">
                Sign in to the App with your Google account.
              </p>
              <Button
                onClick={handleSignInWithGoogle}
                className="mt-4 flex w-full items-center gap-2 rounded-sm border-none py-2 text-base font-semibold ring-0 outline-none"
              >
                <div>
                  <FcGoogle className="h-8 w-8" size={28} />
                </div>
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CreateTrip;
