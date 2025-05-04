export interface TripData {
  hotelOptions: {
    hotelName: string;
    hotelAddress: string;
    price: {
      currency: string;
      low: number;
      high: number;
    };
    hotelImageUrl: string;
    geoCoordinates: {
      latitude: number;
      longitude: number;
    };
    rating: number;
    description: string;
  }[];
  itinerary: {
    [day: string]: {
      placeName: string;
      placeDetails: string;
      placeImageUrl: string;
      geoCoordinates: {
        latitude: number;
        longitude: number;
      };
      ticketPricing: string;
      travelTime: string;
    }[];
  };
}
