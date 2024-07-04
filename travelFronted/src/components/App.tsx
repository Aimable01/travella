import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "../Auth/AuthContext";
import Account from "../User/Account";

const App = () => {
  const { session, loading, logout } = useAuth();

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
        <Account key={session.user?.id} />
      )}
      {session && (
        <button onClick={logout} className="button block">
          Sign Out
        </button>
      )}
    </>
  );
};

export default App;
