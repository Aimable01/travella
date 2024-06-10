import { Link } from "react-router-dom";

const Coming = () => {
  return (
    <div className="p-10 md:p-20 text-center">
      <h1 className="font-bold text-3xl text-gray-800 m-3">
        Coming soon! Still working on it
      </h1>
      <Link
        to={"/"}
        className="bg-sky-500 px-4 py-2 rounded m-4 font-semibold text-white hover:bg-sky-700"
      >
        Go home
      </Link>
    </div>
  );
};

export default Coming;
