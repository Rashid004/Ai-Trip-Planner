import { Link } from "react-router-dom";
import { HotelOption } from "../../../types/trip";

const Hotels = ({ hotels }: { hotels: HotelOption[] }) => {
  return (
    <section>
      <h2 className="mt-5 text-xl font-bold">Hotel Recommendations</h2>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {hotels.map((hotel, index) => (
          <Link
            key={index}
            to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              hotel.address,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-105"
          >
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={hotel?.imageUrl}
                alt={hotel.hotelName}
                className="h-[200px] w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{hotel.hotelName}</h3>
                <p className="text-sm text-gray-500">📍 {hotel.address}</p>
                <p className="text-sm text-gray-500">
                  💰 {hotel.price.low} - {hotel.price.high} AED
                </p>
                <p className="text-sm text-gray-500">⭐ {hotel.rating}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hotels;
