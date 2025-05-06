export interface UserSelection {
  destination: string;
  duration: number;
  budget: string;
  travelList: string;
}

export interface HotelOption {
  hotelName: string;
  hotelAddress: string;
  price: string;
  rating: number;
  hotelImageUrl: string;
  description: string;
  itinerary: ItineraryPlace[];
  geoCoordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface ItineraryPlace {
  imageUrl: string;
  placeName: string;
  travelTime: string;
  placeDetails: string;
  ticketPricing: string | { [key: string]: number };
  geoCoordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface Itinerary {
  [day: string]: ItineraryPlace | ItineraryPlace[];
}

export interface TripDataContent {
  travelPlan: {
    hotels: HotelOption[];
  };
  hotels: HotelOption[];
  itinerary: Itinerary;
}

export interface TripRecord {
  id: string;
  userEmail: string;
  userSelection: UserSelection;
  tripData: TripDataContent;
  created_at?: string;
}
