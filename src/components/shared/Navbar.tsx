import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-[#00000099] py-2 text-white px-[5%] mx-auto">
        <div className="flex-30 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <Link href={"/"}>
            {" "}
            <span className="text-blue-300 font-bold text-[40px]">Ocean</span>
            &apos;s Bounty
          </Link>
        </div>
        <ul className="flex-30 flex items-center justify-center gap-6 text-slate-900">
          <Link
            href={"/"}
            className="cursor-pointer  rounded-full  px-6 py-2 text-white hover:bg-sky-600"
          >
            Home
          </Link>
          <Link
            href={"/categories"}
            className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600"
          >
            Categories
          </Link>
          <Link
            href={"/fish"}
            className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600"
          >
            Products
          </Link>
          <Link
            href={"/flash-sale"}
            className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600"
          >
            Flash Sale
          </Link>
          <Link
            href={"/about-us"}
            className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600"
          >
            About Us
          </Link>
          <Link
            href={"/contact-us"}
            className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600"
          >
            Contact Us
          </Link>
        </ul>
        <div className="flex-30"></div>
      </nav>
    </>
  );
};

export default Navbar;
