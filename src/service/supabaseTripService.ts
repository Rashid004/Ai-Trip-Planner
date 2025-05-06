import { UserSelection } from "../hooks/useLocalUser";
import { supabase } from "../lib/supabaseClient";
import { TripRecord } from "../types/trip";

// Get All Data
export const getAllData = async () => {
  const { data, error } = await supabase.from("AiTrips").select("*");
  if (error) throw error;
  return data;
};

export const getTripById = async (id: string): Promise<TripRecord | null> => {
  const { data, error } = await supabase
    .from("AiTrips")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching trip:", error);
    return null;
  }

  return data;
};
// create new trip
export const createTrip = async (
  id: string,
  tripData: TripRecord,
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
