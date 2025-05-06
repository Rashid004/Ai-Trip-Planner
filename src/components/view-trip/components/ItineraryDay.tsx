import { Link } from "react-router-dom";
import { FaMapMarkedAlt } from "react-icons/fa";

interface Place {
  placeName: string;
  placeDetails: string;
  placeImageUrl: string;
  geoCoordinates: string;
  ticketPricing: string;
  timeToVisit: string;
  rating: string;
}

interface ItineraryDayProps {
  day: string;
  plan: Place[];
}

const ItineraryDay = ({ day, plan }: ItineraryDayProps) => {
  return (
    <div className="my-10">
      <h2 className="mb-4 text-xl font-bold text-gray-800">{day}</h2>
      <div className="flex flex-col gap-5">
        {plan.map((place, index) => {
          // const [lat, lng] = place.geoCoordinates.split(",").map(Number);
          return (
            <div
              key={index}
              className="flex flex-col items-start gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:flex-row"
            >
              <img
                src={"/images/img2.jpg"}
                alt={place.placeName}
                className="h-32 w-full rounded-xl object-cover sm:w-40"
              />
              <div className="w-full flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {place.placeName}
                </h3>
                <p className="text-sm text-gray-600">{place.placeDetails}</p>
                <p className="mt-1 text-sm text-gray-500">
                  🎟️ {place.ticketPricing}
                </p>
                <p className="text-sm text-gray-500">🕒 {place.timeToVisit}</p>
                <p className="text-sm text-gray-500">⭐ {place.rating}</p>
              </div>
              <Link
                to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  place.placeName,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-primary rounded-lg bg-black px-4 py-2 transition hover:text-white"
              >
                <FaMapMarkedAlt className="h-6 w-6" color="#fff" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItineraryDay;
