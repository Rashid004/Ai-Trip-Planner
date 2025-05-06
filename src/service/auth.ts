import { toast } from "sonner";
import { supabase } from "../lib/supabaseClient";

export const handleSignInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `https://ai-travel-planner-pied.vercel.app/`,
    },
  });
  if (error) {
    toast("Google Sign-In Error: " + error.message);
  }
};

export const handleSignOut = async () => {
  await supabase.auth.signOut();
  localStorage.removeItem("user");
  window.location.reload();
  toast("You have been signed out.");
};
