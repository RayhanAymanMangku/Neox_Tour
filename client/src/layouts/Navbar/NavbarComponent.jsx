import React from "react";
import { useState } from "react";
import { Collapse, List } from "@material-tailwind/react";
import { IconButton, MobileNav, Navbar } from "@material-tailwind/react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const NavbarSticky = () => {
  const [openNav, setOpenNav] = useState(false);

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  function NavList() {
    return (
      <List className="flex flex-col lg:flex-row lg:gap-2 mt-4 mb-6 lg:mt-0 lg:mb-0 p-0">
        <li className="list-none">
          <a href="/" className="px-3 py-2 font-extralight transition duration-300 hover:text-[#0ea5e9]">
            Home
          </a>
        </li>
        <li className="list-none">
          <a href="/Destinations" className="px-3 py-2 font-extralight  transition duration-300 hover:text-[#0ea5e9]">
            Destinations
          </a>
        </li>
        <li className="list-none">
          <a href="#" className="px-3 py-2 font-extralight transition duration-300 hover:text-[#0ea5e9]">
            Gallery
          </a>
        </li>
        <li className="list-none">
          <a href="#" className="px-3 py-2 font-extralight transition duration-300 hover:text-[#0ea5e9]">
            Contact
          </a>
        </li>
      </List>
    );
  }

  return (
    <div className="sticky top-0 z-20 w-full items-center">
      <Navbar className="shadow-none lg:px-24 lg:py-4 mx-auto max-w-full border-none">
        <div className="flex items-center justify-between w-full">
          <img src="/assets/Logo/Neox.png" className="w-36 h-12" alt="logo" />
          <div className="hidden lg:flex flex-grow items-center justify-center">
            <NavList />
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <button className="px-4 py-2 bg-[#0ea5e9] hover:bg-white transition-all duration-300 hover:text-[#0ea5e9] rounded-full text-white font-extralight hover:shadow-md" >
              <a href="#topDestination">
                Get Started
              </a>
            </button>
            <button className="px-2 py-2 bg-[#0ea5e9] hover:bg-white transition-all duration-300 rounded-full hover:shadow-md">
              <ArrowForwardIcon className="text-white hover:text-[#0ea5e9] transition-all duration-300" />
            </button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-8 w-8 text-inherit hover:bg-transparent text-gray-600 focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>

        <Collapse open={openNav}>
          <NavList />
          <div className="flex flex-col gap-2 mt-4">
            <button className="px-4 py-2 bg-[#0ea5e9] rounded-full text-white font-extralight hover:shadow-md">
              <a href="#topDestination">Get Started</a>
            </button>
            <button className="px-2 py-2 bg-[#0ea5e9] rounded-full hover:shadow-md">
              <ArrowForwardIcon className="text-white" />
            </button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar;
