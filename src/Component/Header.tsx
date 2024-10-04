import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This adds the smooth scroll effect
    });
  };

  const mobileNav = (
    <div className="absolute duration-500 flex-center bg-gradient-to-r from-yellow-400 to-orange-400 transition mt-3 -right-0 h-auto z-10">
      <ul className="text-center p-4 text-base text-black">
        {['/', '/about', '/resume', '/testimonial', '/portfolio', '/contact'].map((path, index) => (
          <li key={index}>
            <Link to={path} className="hover:text-white" onClick={handleScrollToTop}>
              <button className="w-64 border-b-2 my-1 py-1 border-red-900 hover:bg-violet-700 hover:rounded-lg">
                {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex shadow-lg w-full h-10 z-20 fixed px-5 md:px-20 py-2 mx-auto bg-transparent">
      <div className="flex justify-between items-center flex-1 mx-auto">
        <span className="text-sm sm:text-xl font-bold tracking-widest text-center">
          <Link to="/" className="text-white text-nowrap" onClick={handleScrollToTop}>
            <h1>
              <span className="text-black">Allcrown</span>
              <span>works</span>
            </h1>
          </Link>
        </span>

        <span className="text-center text-sm">
          <ul className="hidden gap-3 md:flex cursor-pointer transition">
            {['/', '/about', '/resume', '/testimonial', '/portfolio', '/contact'].map((path, index) => (
              <li key={index}>
                <Link to={path} className="hover:text-amber-50" onClick={handleScrollToTop}>
                  {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </span>

        <span onClick={() => setToggle(!toggle)} className="md:hidden text-gray-800 cursor-pointer">
          {toggle ? <FaBars /> : <FaTimes />}
          {toggle && mobileNav}
        </span>
      </div>
    </div>
  );
};

export default Header;
