export interface UserSelection {
  destination: string;
  duration: number | string;
  budget: string;
  travelList: string;
}

export interface HotelOption {
  hotelName: string;
  address: string;
  price: {
    low: number;
    high: number;
  };
  rating: number;
  imageUrl: string;
  description: string;
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
  HotelOptions: HotelOption[];
  itinerary: Itinerary;
}

export interface TripRecord {
  id: string;
  userEmail: string;
  userSelection: UserSelection;
  tripData: TripDataContent;
  created_at?: string;
}
