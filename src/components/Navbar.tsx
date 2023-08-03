import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex nav h-16 justify-end static">
      <h1 className="absolute top-2 left-4 text-4xl">
        <a href="/">EqualDecks</a>
      </h1>
      <div className="flex items-center mr-10">
        <Link
          className="nav-menu-item hover:h-24 hover:mt-6 hover:bg-[#EE9B00] ease-in-out duration-300"
          href="/"
        >
          Home
        </Link>
        <Link
          className="nav-menu-item hover:h-24 hover:mt-6 hover:bg-[#CA6702] ease-in-out duration-300"
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className="nav-menu-item hover:h-24 hover:mt-6 hover:bg-[#BB3E03] ease-in-out duration-300"
          href="/about"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
