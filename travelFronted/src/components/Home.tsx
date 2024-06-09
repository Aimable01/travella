import { Link } from "react-router-dom";
import landon from "../assets/landon.mp4";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="px-6 py-3">
      <div className="relative h-[450px] w-[95%] pl-4">
        <video
          className="h-[450px] w-full object-cover rounded-lg absolute -z-10"
          autoPlay
          loop
          muted
        >
          <source src={landon} type="video/mp4" />
        </video>
        <div className="text-white pt-16 md:px-10 lg:px-20 ">
          <div className=" text-center p-5">
            <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Explore the world with ease. Find and book your perfect travel
              experiences, accommodations, and tours effortlessly.
            </h1>
            <p className="text-sm text-slate-300 md:text-md md:my-9">
              Your ultimate platform to book, explore, and enjoy the world
              without any booking fees or hidden charges.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              to={"/register"}
              className="flex items-center gap-2 bg-sky-500 px-4 py-2 rounded-md font-semibold hover:animate-bounce"
            >
              Get Started <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
