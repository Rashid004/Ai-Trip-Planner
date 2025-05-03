import Header from "./components/custom/Header";
import { Outlet } from "react-router-dom";

const App = () => {
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
