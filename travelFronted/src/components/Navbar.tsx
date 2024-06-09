import { Link } from "react-router-dom";
import logo from "../../src/assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null); // Explicit type declaration
  const [activeLink, setActiveLink] = useState<string>("Home");

  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "" },
    { name: "Pricing", link: "" },
    { name: "Contact", link: "" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) // Explicit type assertion
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className="sticky top-0 z-50 bg-white backdrop-blur-sm bg-opacity-70"
    >
      <nav className="md:flex md:justify-between md:items-center md:px-5 md:pt-1 md:pb-2">
        <Link
          to={"/"}
          onClick={() => {
            if (isOpen) {
              setIsOpen(!isOpen);
            }
          }}
          className="flex justify-between p-3 md:pt-1"
        >
          <div className="flex items-center gap-2">
            <img className="w-8 h-8" src={logo} alt="Travella logo" />
            <h2 className="font-bold text-xl md:text-2xl text-gray-800">
              Travella
            </h2>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-900 md:hidden"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </div>
        </Link>
        <hr className="text-gray-950" />

        {/* the mobile links */}
        <div
          className={`font-semibold absolute w-full transition-all duration-700 bg-white ${
            isOpen ? "top-[54px] max-h-screen overflow-auto" : "top-[-1000px]"
          }`}
        >
          <div className="flex flex-col gap-2 text-gray-900  p-3">
            {links.map((li, i) => (
              <Link
                to={li.link}
                className={`${activeLink === li.name ? "text-sky-500" : ""}`}
                key={i}
                onClick={() => {
                  setIsOpen(!isOpen);
                  setActiveLink(li.name);
                }}
              >
                {li.name}{" "}
              </Link>
            ))}
          </div>
          <hr className="text-gray-950" />
          <div className="flex gap-2 text-gray-800 font-semibold mt-2 bg-white p-3">
            <Link to={""}>
              <button className="border border-gray-900 rounded px-5 py-1">
                Login
              </button>
            </Link>
            <Link to={""}>
              <button className="bg-sky-500 border border-sky-500 rounded px-5 py-1">
                Register
              </button>
            </Link>
          </div>
        </div>

        {/* the desktop links */}
        <div
          className={`hidden md:block font-semibold transition-all duration-700`}
        >
          <div className="flex gap-7 text-gray-900 md:pt-0">
            {links.map((li, i) => (
              <Link
                to={li.link}
                className={`${
                  activeLink === li.name ? "text-sky-500" : ""
                } hover:text-sky-700 duration-500`}
                key={i}
                onClick={() => {
                  setActiveLink(li.name);
                }}
              >
                {li.name}{" "}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:flex gap-2 text-gray-800 font-semibold bg-white">
          <Link to={""}>
            <button className="border border-gray-900 rounded px-5 py-1 hover:bg-slate-200 duration-500">
              Login
            </button>
          </Link>
          <Link to={""}>
            <button className="bg-sky-500 border border-sky-500 rounded px-5 py-1 hover:bg-sky-600 duration-500">
              Register
            </button>
          </Link>
        </div>
      </nav>
      <hr className="text-gray-900" />
    </div>
  );
};

export default Navbar;
