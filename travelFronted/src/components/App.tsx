import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <hr className="text-gray-950 my-2" />
      <Footer />
    </>
  );
};

export default App;
