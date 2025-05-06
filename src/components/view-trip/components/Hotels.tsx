import { Link } from "react-router-dom";
import { HotelOption } from "../../../types/trip";

const Hotels = ({ hotels }: { hotels: HotelOption[] }) => {
  return (
    <section>
      <h2 className="mt-5 text-xl font-bold md:mt-8">Hotel Recommendations</h2>
      <div className="mt-4 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {hotels?.map((hotel, index) => (
          <Link
            key={index}
            to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              hotel.hotelAddress,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-105"
          >
            <div className="flex h-full flex-col items-start rounded-lg">
              <img
                src={hotel.hotelImageUrl && "/images/img1.jpg"}
                alt={hotel.hotelName}
                className="h-[200px] w-full rounded-lg object-cover"
              />
              <div className="space-y-1.5 pt-1.5">
                <h3 className="text-lg font-semibold">{hotel.hotelName}</h3>
                <p className="text-base text-gray-500">
                  📍 {hotel.hotelAddress}
                </p>
                <p className="text-sm font-medium text-gray-700">
                  💰 {hotel.price}
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
