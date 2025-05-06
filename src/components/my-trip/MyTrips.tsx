import { useQuery } from "@tanstack/react-query";
import { useLocalUser } from "../../hooks/useLocalUser";
import { getAllData } from "../../service/supabaseTripService";
import { TripRecord } from "../../types/trip";
import { Link } from "react-router-dom";

const MyTrips = () => {
  const user = useLocalUser();

  const { data: trips, isLoading } = useQuery<TripRecord[]>({
    queryKey: ["myTrips", user?.email],
    queryFn: async () => {
      const allTrips = await getAllData();
      return allTrips.filter((trip) => trip.userEmail === user?.email);
    },
    enabled: !!user,
  });

  if (isLoading)
    return <p className="mt-8 text-center">Loading your trips...</p>;

  return (
    <section className="section-container py-10">
      <h2 className="mb-6 text-2xl font-bold md:text-3xl">My Trips</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {trips?.map((trip) => (
          <Link to={`/view-trip/${trip.id}`} key={trip.id}>
            <div className="overflow-hidden rounded-lg shadow transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
              <img
                src={
                  trip.tripData.hotels?.[0]?.hotelImageUrl ||
                  "/images/fallback.jpg"
                }
                alt={trip.userSelection.destination}
                className="h-[180px] w-full object-cover"
              />
              <div className="bg-white p-4">
                <h3 className="line-clamp-1 text-lg font-semibold">
                  {trip.userSelection.destination}
                </h3>
                <p className="text-sm text-gray-500">
                  📅 {trip.userSelection.duration} Days <br />
                  💰 {trip.userSelection.budget} Budget <br />
                  🧍 {trip.userSelection.travelList}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MyTrips;
