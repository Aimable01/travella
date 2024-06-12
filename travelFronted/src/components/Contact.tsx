import { MdOutlineLocalPhone } from "react-icons/md";
import { FaRegEnvelope, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
  const links = [
    { icon: <MdOutlineLocalPhone />, desc: "+250 729 550 551" },
    { icon: <FaRegEnvelope />, desc: "aimable.kwizera24@gmail.com" },
    { icon: <CiLocationOn />, desc: "Musanze, Rwanda" },
  ];

  const socials = [
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/kwizera-aimable-b52022297/",
    },
    { icon: <FaInstagram />, link: "" },
    { icon: <FaXTwitter />, link: "https://x.com/Aimable44" },
  ];

  return (
    <div className="mx-10 md:mx-20 lg:mx-32">
      <div className="text-center m-5">
        <h2 className="font-bold text-xl">Contact us</h2>
        <p className="font-semibold text-gray-700 text-[15px]">
          Let us know what you think. Any suggestion?
        </p>
      </div>

      <div className="border border-gray-300 rounded p-3  flex flex-col gap-16  md:grid md:grid-rows-1 md:grid-cols-2">
        <div className="flex flex-col md:justify-center gap-4 md:gap-14">
          <div>
            <h2 className="font-bold text-gray-900 text-[16px]">
              Contact information
            </h2>
            <p className="font-semibold text-gray-700 text-[14px]">
              Let us know what you think. Any suggestion?
            </p>
          </div>

          <div className="text-[14px]">
            {links.map((li, i) => (
              <p
                key={i}
                className="flex items-center text-gray-800 font-semibold"
              >
                {li.icon}
                <span className="p-1"> </span> {li.desc}
              </p>
            ))}
          </div>

          <div className="flex gap-3 text-lg font-semibold text-gray-700">
            {socials.map((so, i) => (
              <Link key={i} target="_blank" to={so.link}>
                {so.icon}{" "}
              </Link>
            ))}
          </div>
        </div>

        {/* message box */}
        <form className="">
          <div className="grid grid-cols-1 grid-rows-2">
            <div className="grid grid-cols-1 grid-rows-4 gap-4 md:grid-cols-2 md:grid-rows-2">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="firstName"
                  className="text-gray-900 font-semibold"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  className="rounded focus:outline-none text-gray-700 text-[14px] font-semibold"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="lastName"
                  className="text-gray-900 font-semibold"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Last name"
                  className="rounded focus:outline-none text-gray-700 text-[14px] font-semibold"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="firstName"
                  className="text-gray-900 font-semibold"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="firstName"
                  placeholder="Enter your email"
                  className="rounded focus:outline-none text-gray-700 text-[14px] font-semibold"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="firstName"
                  className="text-gray-900 font-semibold"
                >
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="firstName"
                  placeholder="Enter your phone"
                  className="rounded focus:outline-none text-gray-700 text-[14px] font-semibold"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-gray-900 font-semibold">
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Enter your message"
                className="rounded h-full focus:outline-none text-gray-700 text-[14px] font-semibold"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-sky-500 px-4 py-2 rounded text-[15px] hover:bg-sky-700 duration-500 mt-4"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
