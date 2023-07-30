import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Navbar;