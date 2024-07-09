import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import { useAuth } from "../Auth/AuthContext";

import { IoClose, IoMenu } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { MdAccountBox } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { logout } = useAuth();

  const sideLinks = [
    { name: "Home", link: "/user", icon: <IoMdHome /> },
    { name: "Find Places", link: "#", icon: <FaSearch /> },
    { name: "Saved Places", link: "/saved", icon: <FaHeart /> },
    { name: "Account", link: "/user/profile", icon: <MdAccountBox /> },
  ];

  return (
    <div className="">
      <div className="">
        <div className="px-3 flex items-center gap-[200px] md:gap-0 mb-4">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-900 md:hidden cursor-pointer"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </div>

          <Link to={"/user"} className="flex items-center gap-2">
            <img className="w-8 h-8" src={logo} alt="Travella logo" />
            <h2 className="font-bold text-xl md:text-2xl text-gray-800">
              Travella
            </h2>
          </Link>
        </div>

        <hr className="text-gray-600" />
      </div>

      {/* the links */}
      <div
        className={`border-r border-gray-400 left-[-100%] md:left-[0] w-[200px] h-[550px] px-3 pt-5 transition-all duration-500 fixed ${
          isOpen ? "left-[0]" : ""
        }`}
      >
        <div className="flex flex-col gap-4">
          {sideLinks.map((li, i) => (
            <Link
              to={li.link}
              key={i}
              className="flex items-center gap-2 text-gray-800 hover:text-sky-500 duration-500"
            >
              <span className="text-xl ">{li.icon}</span>
              <span className="font-semibold text-[17px]">{li.name} </span>
            </Link>
          ))}
        </div>

        <div
          className="my-5 text-white px-3 py-2 rounded-md mx-5 flex gap-2 items-center font-semibold bg-sky-600 hover:bg-sky-900 duration-500 cursor-pointer"
          onClick={logout}
        >
          <FiLogOut />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};
