import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex bg-cyan-800 h-16 justify-end static">
      <h1 className="absolute top-2 left-4 text-4xl">
        <a href="/">EqualDecks</a>
      </h1>
      <div className="flex items-center mr-10">
        <Link
          className="nav-menu-item hover:h-24 hover:mt-6 hover:bg-red-500 ease-in-out duration-300"
          href="/"
        >
          Home
        </Link>
        <Link
          className="nav-menu-item hover:h-24 hover:mt-6 hover:bg-orange-500 ease-in-out duration-300"
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className="nav-menu-item hover:h-24 hover:mt-6 hover:bg-yellow-500 ease-in-out duration-300"
          href="/about"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
