import { UserSelection } from "../hooks/useLocalUser";
import { supabase } from "../lib/supabaseClient";
import { TripData } from "../types/trip";

// Get All Data
export const getAllData = async () => {
  const { data, error } = await supabase.from("AiTrips").select("*");
  if (error) throw error;
  return data;
};

// get by id
export const getTripById = async (id: string) => {
  const { data, error } = await supabase
    .from("AiTrips")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};

// create new trip
export const createTrip = async (
  id: string,
  tripData: TripData,
  userSelection: UserSelection,
  userEmail: string,
) => {
  const { error } = await supabase.from("AiTrips").insert([
    {
      id,
      tripData,
      userSelection,
      userEmail,
    },
  ]);
  if (error) throw error;
};
