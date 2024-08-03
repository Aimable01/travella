import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "../auth/useAuth";
import App1 from "../Authenticated/App1";

const App = () => {
  const { session, loading } = useAuth();

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
        <App1 />
      )}
    </>
  );
};

export default App;
