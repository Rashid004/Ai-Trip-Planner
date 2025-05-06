import { IoIosSend } from "react-icons/io";
import { Button } from "../../ui/button";
import { TripRecord } from "../../../types/trip";
// import { GetPlaceDetails } from "../../../service/globalApi";
// import { useEffect } from "react";

const InformationSection = ({ trip }: { trip: TripRecord }) => {
  const { userSelection } = trip;

  // useEffect(() => {
  //   if (userSelection?.destination) {
  //     getPlacePhoto(userSelection.destination);
  //   }
  // }, [userSelection]);

  // const getPlacePhoto = async (destination: string) => {
  //   try {
  //     const data = { textQuery: destination };
  //     const response = await GetPlaceDetails(data);
  //     console.log("Google Places Result:", response.data);
  //   } catch (err) {
  //     console.error("Google Places API error:", err);
  //   }
  // };
  return (
    <div>
      <img
        src={"/images/img4.jpg"}
        alt="Trip Destination"
        className="h-[350px] w-full rounded-xl object-cover"
      />
      <div className="my-5 flex flex-col gap-2">
        <h2 className="text-2xl font-bold">{userSelection.destination}</h2>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-5">
            <h2 className="rounded-full bg-gray-200 px-3 py-2">
              📅 {userSelection.duration} Days
            </h2>
            <h2 className="rounded-full bg-gray-200 px-3 py-2">
              💰 {userSelection.budget} Budget
            </h2>
            <h2 className="rounded-full bg-gray-200 px-3 py-2">
              🥂 Travelers: {userSelection.travelList}
            </h2>
          </div>
          <Button>
            <IoIosSend className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
