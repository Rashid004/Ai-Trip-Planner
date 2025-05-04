import { useEffect } from "react";
import Header from "./components/custom/Header";
import { Outlet } from "react-router-dom";
import { supabase } from "./lib/supabaseClient";

const App = () => {
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      } else {
        localStorage.removeItem("user");
      }
    };
    getUser();
  }, []);

  return (
    <>
      <Header />
      <main className="pt-4">
        <Outlet />
      </main>
    </>
  );
};

export default App;
