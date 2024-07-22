import { supabase } from "../supabaseClient";
import { IoLogoGoogle } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";

import img from "../assets/bgDr.jpg";

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
      });
    } catch (error) {
      console.error("An error in login with google, ", error);
    }
  };
  return (
    <>
      <div className="relative">
        <img
          src={img}
          alt="a random image"
          className="fixed top-0 -z-[10] h-[450px] w-[1500px] opacity-20"
        />
        <div className="flex justify-center items-center my-[80px] lg:my-[150px]">
          <button
            onClick={handleLogin}
            className="bg-sky-600 text-white font-bold px-4 py-2 rounded-md flex items-center gap-4"
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="animate-spin" />
            ) : (
              <IoLogoGoogle className="text-xl text-pink-200" />
            )}
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </>
  );
}
