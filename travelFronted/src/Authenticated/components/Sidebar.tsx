import { useState } from "react";
import { useAuth } from "../../auth/useAuth";
import { supabase } from "../../supabaseClient";

export default function Sidebar() {
  const [loading, setLoading] = useState(false);
  const session = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-[300px]">
      <h1>
        👋👋 Welcome{" "}
        <span className="font-bold">{session.session?.user.email}</span>
      </h1>
      <h1>Thank you for checking here.</h1>
      <h1>But sorry, 😔😔 this is still under construction</h1>
      <h1>Feel free to logout</h1>
      <button
        onClick={() => {
          setLoading(true);
          supabase.auth.signOut();
        }}
        className="bg-sky-500 text-white font-bold px-4 py-2 rounded-md my-4 hover:bg-sky-800 duration-500"
      >
        {loading ? "..." : "Logout"}
      </button>
    </div>
  );
}
