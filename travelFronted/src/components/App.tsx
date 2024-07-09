import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const App = () => {
  const { session, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!session ? (
        <>
          <Navbar />
          <Outlet />
          <hr className="text-gray-950 my-2" />
          <Footer />
        </>
      ) : (
        navigate("/user")
      )}
    </>
  );
};

export default App;
