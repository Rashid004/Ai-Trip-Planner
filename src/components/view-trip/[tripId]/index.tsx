import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import InformationSection from "../components/InformationSection";
import Hotels from "../components/Hotels";
import { TripRecord } from "../../../types/trip";
import { getTripById } from "../../../service/supabaseTripService";
import ItineraryDay from "../components/ItineraryDay";
import Footer from "../components/Footer";

const ViewTrip = () => {
  const { tripId } = useParams<{ tripId: string }>();

  const {
    data: trip,
    isLoading,
    isError,
  } = useQuery<TripRecord | null>({
    queryKey: ["trip", tripId],
    queryFn: () => getTripById(tripId!),
    enabled: !!tripId,
  });
  console.log(trip);
  if (isLoading) return <div>Loading...</div>;
  if (isError || !trip) return <div>Error loading trip data.</div>;

  return (
    <section className="section-container-1 my-10">
      <InformationSection trip={trip} />
      <Hotels hotels={trip.tripData.travelPlan.hotels} />
      {Array.isArray(trip.tripData.travelPlan?.itinerary) &&
        trip.tripData.travelPlan?.itinerary?.map(
          (dayBlock: { day: string; plan: [] }) => (
            <ItineraryDay
              key={dayBlock.day}
              day={dayBlock.day}
              plan={dayBlock.plan}
            />
          ),
        )}
      <Footer />
    </section>
  );
};

export default ViewTrip;
