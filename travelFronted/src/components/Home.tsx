import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>Home</div>
      <Outlet />
    </>
  );
};

export default Home;
