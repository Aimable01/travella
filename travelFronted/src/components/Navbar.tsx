import logo from "../../src/assets/logo.jpg";
const Navbar = () => {
  const links = [
    { name: "About", link: "" },
    { name: "Services", link: "" },
    { name: "Pricing", link: "" },
    { name: "Contact", link: "" },
  ];
  return (
    <div>
      <nav className="p-5">
        <div className="flex items-center gap-2">
          <img className="w-8 h-8" src={logo} alt="Travella logo" />
          <h2 className="font-bold text-2xl text-gray-800">Travella</h2>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
