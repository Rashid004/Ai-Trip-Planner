export interface UserSelection {
  destination: string;
  duration: number;
  budget: string;
  travelList: string;
}

export interface HotelOption {
  hotelName: string;
  itinerary?: Itinerary;

  hotelAddress: string;
  price: string;
  rating: number;
  hotelImageUrl: string;
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
  travelPlan: {
    hotels: HotelOption[];
  };
  hotels: HotelOption[];

  itinerary?: { day: string; plan: [] }[];
}

export interface TripRecord {
  id: string;
  userEmail: string;
  userSelection: UserSelection;
  // tripData: TripDataContent;
  created_at?: string;
  tripData: {
    travelPlan: {
      hotels: HotelOption[];
      itinerary?: { day: string; plan: [] }[];
    };
  };
}
