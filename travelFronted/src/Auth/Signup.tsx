// src/components/Signup.tsx
import { useState } from "react";
import { supabase } from "../supabaseClient";

import logo from "../assets/logo.png";

const Signup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleSignup = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      alert(" error.message");
    } else {
      alert("check your email for the login link");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="border border-gray-300 rounded w-[300px] p-6 mt-20">
        <div className="flex flex-col gap-2 justify-center items-center mb-6">
          <img className="w-10 h-10" src={logo} alt="Travella logo" />
          <h1 className="font-bold text-xl text-gray-800 text-center">
            Sign up
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold text-gray-800">
              Email
            </label>
            <input
              className="rounded focus:outline-none text-gray-700 text-[15px]"
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            className="bg-sky-500 text-gray-100 font-bold rounded px-2 py-2 hover:bg-sky-600 duration-500"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? <span>loading...</span> : <span>Sign up</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
