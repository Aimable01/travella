import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "../auth/useAuth";
import { supabase } from "../supabaseClient";

const App = () => {
  const { session } = useAuth();

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
        <div>
          <p>Welcome, {session.user?.email}</p>
          <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
        </div>
      )}
    </>
  );
};

export default App;
