import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    { name: "Booking", link: "" },
    { name: "Tour Guiding", link: "" },
    { name: "Hotel", link: "" },
  ];
  const places = [
    { name: "Africa", link: "" },
    { name: "Europe", link: "" },
    { name: "Asia", link: "" },
    { name: "America", link: "" },
  ];
  const contacts = [
    { name: "phone", desc: "+250 729 550 551" },
    { name: "email", desc: "aimable.kwizera14@gmail.com" },
    { name: "location", desc: "Musanze, Rwanda" },
  ];
  return (
    <div>
      <div className="mx-20 text-[15px] font-semibold grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-3 md:grid-rows-1">
        <div>
          <div>
            <h1 className="my-3">Our services</h1>
            <div className="flex flex-col gap-0.5">
              {services.map((li, i) => (
                <Link to={li.link} key={i} className="text-gray-600">
                  {li.name}{" "}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="my-3">Places</h1>
            <div className="flex flex-col gap-0.5">
              {places.map((li, i) => (
                <Link to={li.link} key={i} className="text-gray-600">
                  {li.name}{" "}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="my-3">Contact us</h1>
            <div className="flex flex-col gap-0.5">
              {contacts.map((li, i) => (
                <p key={i} className="text-gray-600">
                  {li.name}: {li.desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-sm font-semibold text-gray-800 p-3">
        <h1>
          Copyright &copy; {new Date().getFullYear()} Travella. All Rights
          Reserved{" "}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
