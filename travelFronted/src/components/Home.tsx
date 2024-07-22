import { Link } from "react-router-dom";
import landon from "../assets/landon.mp4";
import travelbg from "../assets/travelHero.png";

import {
  FaLongArrowAltRight,
  FaArrowRight,
  FaArrowLeft,
  FaCalendarCheck,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { SiWpexplorer } from "react-icons/si";
import { MdHotel } from "react-icons/md";
import athens from "../assets/athens.jpeg";
import london from "../assets/london.jpeg";
import ibiza from "../assets/ibiza.jpeg";
import newyork from "../assets/newyork.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import "./slider.css";

const Home = () => {
  const services = [
    {
      name: "Booking",
      icon: <FaCalendarCheck />,
      link: "",
      description:
        "Easily reserve your accommodations, flights, and activities with our user-friendly platform. Find the best deals and confirm your travel plans hassle-free.",
    },
    {
      name: "Tour Guiding",
      icon: <SiWpexplorer />,
      link: "",
      description:
        "Embark on unforgettable journeys with our expert tour guides. Explore hidden gems, cultural landmarks, and breathtaking landscapes with insightful local guidance.",
    },
    {
      name: "Hotels",
      icon: <MdHotel />,
      link: "",
      description:
        "Discover a range of accommodations to suit every budget and preference. From luxurious resorts to cozy boutique hotels, find the perfect place to rest and rejuvenate during your travels.",
    },
  ];

  const popularDestinations = [
    {
      name: "Athens",
      image: athens,
      category: "Museum",
      location: "Greece",
      cost: "$1200",
      link: "",
    },
    {
      name: "London",
      image: london,
      category: "City",
      location: "UK",
      cost: "$1700",
      link: "",
    },
    {
      name: "Ibiza",
      image: ibiza,
      category: "Beach",
      location: "Italy",
      cost: "$2000",
      link: "",
    },
    {
      name: "New York",
      image: newyork,
      category: "City",
      location: "US",
      cost: "$2500",
      link: "",
    },
  ];

  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const experience = [
    { name: "20", desc: "Years experience" },
    { name: "460+", desc: "Destination collaboration" },
    { name: "50k+", desc: "Happy customers" },
  ];

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
        <div className="text-white pt-16 md:px-10 lg:px-20">
          <div className="text-center p-5">
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
              to={"/login"}
              className="flex items-center gap-2 bg-sky-500 px-4 py-2 rounded-md font-semibold hover:scale-105 duration-500"
            >
              Get Started <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </div>

      {/* what we offer */}
      <div className="my-5">
        <h1 className="my-5 text-gray-800 font-bold text-xl">
          Explore services
        </h1>
        <div className="grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4">
          {services.map((service, i) => (
            <Link
              to={service.link}
              key={i}
              className="border border-gray-400 rounded-lg p-5 flex flex-col gap-2 hover:-translate-y-1 duration-500"
            >
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="text-3xl text-sky-500">{service.icon}</div>
                <div className="text-lg flex items-center gap-2 text-gray-800">
                  <h1 className="font-bold">{service.name}</h1>
                  <FaArrowRight className="font-normal text-sm" />
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium text-center">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* popular destinations */}
      <div className="my-5">
        <h1 className="my-5 text-gray-800 font-bold text-xl">
          Popular destinations
        </h1>
        <div className="relative">
          <div className="flex justify-end mb-2">
            <button
              className="h-8 w-8 pl-2 bg-white border border-gray-400 text-black font-normal hover:bg-sky-500 rounded-full text-sm hover:text-white duration-500"
              onClick={goToPrevSlide}
            >
              <FaArrowLeft />
            </button>
            <button
              className="h-8 w-8 pl-2 ml-1 bg-white border border-gray-400 text-black font-normal hover:bg-sky-500 rounded-full text-sm hover:text-white duration-500"
              onClick={goToNextSlide}
            >
              <FaArrowRight />
            </button>
          </div>
          <Slider {...settings} ref={sliderRef}>
            {popularDestinations.map((dest, i) => (
              <Link
                to={dest.link}
                key={i}
                className="relative border border-gray-400 flex flex-col rounded-md overflow-hidden pb-3"
              >
                <img
                  className="w-full h-64 object-cover rounded-tr-md rounded-tl-md transform transition-transform duration-500 ease-in-out hover:scale-105 "
                  src={dest.image}
                  alt={dest.name}
                />
                <h1 className="bg-sky-500 px-3 py-1 text-white font-semibold text-sm absolute rounded top-2 left-2">
                  {dest.category}
                </h1>
                <div className="mt-4 pl-4">
                  <p className="font-bold text-sky-500">{dest.cost} USD</p>
                  <p className="font-bold my-2">{dest.name}</p>
                  <p className="flex items-center gap-1 font-bold text-gray-700">
                    <CiLocationOn className="text-xl" /> {dest.location}
                  </p>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>

      {/* recommendetion section */}
      <div className="bg-sky-500 p-5 rounded text-white font-bold flex flex-col gap-5 justify-center items-center md:justify-between md:flex-row">
        <div>
          <h1 className="text-lg">Start booking your travel now</h1>
          <p className="text-sm">
            Request a journey or travel now and we will help you
          </p>
        </div>
        <div>
          <Link
            className="px-4 py-2 bg-white text-gray-700 rounded m-2 hover:bg-gray-300 duration-500"
            to={"/register"}
          >
            Book now{" "}
          </Link>
        </div>
      </div>

      {/* discover page */}
      <div className="mx-10 my-5 md:flex md:gap-[150px] md:mx-14 md:items-center ">
        <div>
          <h1 className="text-sky-500 font-bold text-2xl">Our experience</h1>
          <p className="text-3xl font-bold text-gray-900 my-3">
            With our experience we will serve you
          </p>
          <p className="font-semibold text-[16px] text-gray-700">
            Since we first opened we have always prioritized the convenience of
            our users by providing low prices and with an easy process
          </p>
          <div className="md:flex md:gap-5">
            {experience.map((li, i) => (
              <div key={i} className="p-3">
                <h1 className="text-2xl text-sky-500 font-bold">{li.name} </h1>
                <p className="text-gray-700">{li.desc} </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-[30%] right-1 bg-sky-500 w-[350px] h-[150px] -z-10 rounded-tl-full rounded-bl-full"></div>
          <img className="md:h-[400px] md:w-[700px]" src={travelbg} alt="" />
        </div>
      </div>

      {/* subscribe section */}
      <div className="bg-sky-500 text-white  rounded">
        <div className="p-5 flex flex-col items-center justify-center gap-4">
          <div>
            <p className="text-[14px] font-semibold">
              Subscribe to Our Newsletter
            </p>
            <p className="font-bold text-lg my-5">
              Join Our Newsletter and Get the Best Travel Tips and Tricks from
              Around the World.
            </p>
            <p className="text-[16px] font-semibold text-gray-100">
              Sign up for our email subscription now to receive our latest
              travel deals, exclusive destination guides, and insider tips.
            </p>
          </div>
          <div className="relative w-[50%]">
            <input
              type="email"
              required
              placeholder="Your email"
              className=" text-gray-700 w-full text-[17px] focus:outline-none rounded border-none"
            />
            <button className="absolute top-1.5 right-2 mr-2 bg-sky-500 rounded px-3 py-1 text-sm fong-bold hover:bg-sky-700 duration-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
