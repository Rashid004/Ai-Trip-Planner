import { useState } from "react";
import { SelectBudgetOptions, SelectTravelList } from "../../const/option";
import PhotonAutocomplete from "../common/PhotonAutocomplete";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";

const CreateTrip = () => {
  const [formData, setFormData] = useState({
    destination: "",
    duration: 0,
    budget: "",
    travelList: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGenerateTrip = () => {
    if (
      !formData.destination ||
      !formData.duration ||
      !formData.budget ||
      !formData.travelList
    ) {
      toast("Please fill in all the fields to generate your trip. 😢");
      return;
    }

    if (Number(formData.duration) > 5 || Number(formData.duration) < 1) {
      alert("Duration should be between 1 and 5 days.");
      return;
    }

    console.log("Form Data", formData);
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
        <Button className="mt-8" onClick={handleGenerateTrip}>
          Generate Trip
        </Button>
      </div>
    </section>
  );
};

export default CreateTrip;
