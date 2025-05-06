import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

export interface PlaceSearchRequest {
  textQuery: string;
}

export const GetPlaceDetails = async (data: PlaceSearchRequest) => {
  return await axios.post(BASE_URL, data, {
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
      "X-Goog-FieldMask": "places.displayName,places.photos,places.id",
    },
  });
};
