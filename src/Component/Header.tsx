import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const mobileNav = (
    <>
      <div className="absolute duration-500 flex-center bg-gradient-to-r from-yellow-400 to-orange-400 transition mt-3 -right-0 h-auto z-10">
        <ul className="text-center p-4 text-base text-black">
          <li>
            <Link to="/" className=" hover:text-white">
              <button className="w-64 border-b-2 my-1 py-1 border-red-900 hover:bg-violet-700 hover:rounded-lg">
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/about" className=" hover:text-white">
              <button className="w-64 border-b-2 my-1 py-1 border-blue-600 hover:bg-amber-500 hover:rounded-lg">
                About
              </button>
            </Link>
          </li>
          <li>
            <Link to="/resume" className=" hover:text-white">
              <button className="w-64 border-b-2 my-1 py-1 border-blue-600 hover:bg-amber-600 hover:rounded-lg">
                resume
              </button>
            </Link>
          </li>
          <li className="">
            <Link to="/testimonial" className=" hover:text-white">
              <button className="w-64 border-b-2 my-1 py-1 border-blue-600 hover:bg-amber-700 hover:rounded-lg">
                Testimonial
              </button>
            </Link>
          </li>
          <li className="">
            <Link to="/contact" className=" hover:text-white">
              <button className="w-64 border-b-2 my-1 py-1 border-blue-600 hover:bg-amber-800 hover:rounded-lg">
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <div className="flex shadow-lg w-full h-10 z-20 fixed px-5 md:px-20 py-2 mx-auto md:mx-auto bg-transparent">
      <div className="flex justify-between items-center flex-1 mx-auto">
        <span className="text-sm sm:text-xl font-bold tracking-widest text-center">
          <Link to="/" className=" text-white text-nowrap">
            <h1>
              <span className="text-black">Allcrown</span>
              <span>works</span>
            </h1>
          </Link>
        </span>
        {/* <span>
          <form className="bg-lime-400 rounded-lg p-1 flex items-center hover:bg-slate-200">
            <input
              type="text"
              placeholder="search..."
              className="bg-transparent outline-none w-20 sm:w-44"
            />
            <FaSearch className="cursor-pointer text-red-600" />
          </form>
        </span> */}

        <span className="text-center text-sm">
          <ul className="hidden gap-3 md:flex cursor-pointer transition">
            <li>
              <Link to="/" className=" hover:text-amber-50">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className=" hover:text-amber-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/resume" className=" hover:text-orange-100">
                Resume
              </Link>
            </li>
            <li>
              <Link to="/testimonial" className=" hover:text-violet-900">
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="/contact" className=" hover:text-lime-300">
                Contact
              </Link>
            </li>
          </ul>
        </span>

        <span
          // onClick= { kunle }
          onClick={() => setToggle(!toggle)}
          className="md:hidden text-gray-800 cursor-pointer"
        >
          {toggle ? <FaBars /> : <FaTimes />}
          {toggle && mobileNav}
        </span>
      </div>
    </div>
  );
};

export default Header;
