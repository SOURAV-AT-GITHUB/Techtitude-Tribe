import logo from "/Other-files/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
export default function Navbar() {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState("/");
  const isMaxWidth640 = useMediaQuery("(max-width:640px)");
  const [open, setOpen] = useState();
  const opneDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);
  return (
    <nav id="navbar" className="w-full ">


      <div className="flex flex-col md:flex-row justify-between gap-2 bg-primary text-white p-2 sm:px-8 ">
        <ul className="flex flex-col min-[500px]:flex-row justify-between gap-2 sm:gap-4 text-sm sm:text-base">
          <li>54 NJ-12 Flemington, United States</li>
          <li>+153-987-3657</li>
          <li>infor@webteck.com</li>
        </ul>
        <ul className="flex flex-col sm:flex-row ">
          <p>Follow Us On: </p>
          {/* <img src="" alt="" /> */}
        </ul>
      </div>

      <div className="flex w-full bg-slate-200">
        <div className="w-2/4 sm:w-1/4 p-3 sm:py-6 sm:px-8">
          <img src={logo} alt="logo" />
        </div>
        <div className="relative w-3/4 p-3 sm:py-6 sm:px-8 bg-primary ">
          <div className="absolute left-0 top-0 bg-secondary w-full h-full flex justify-end sm:pr-6 md:pr-14 lg:pr-20 ">
            {/* <img src={hamburgerIcon} alt="hamburgerIcon" /> */}
            <button
              onClick={opneDrawer}
              className="sm:hidden bg-primary text-light p-1 px-2"
            >
              <MenuIcon fontSize="large" />
            </button>
            <div className="hidden sm:flex items-center justify-between gap-4 md:gap-10 text-white">
              <div className="flex items-center gap-4">
                <NavLink to="/">
                  <p
                    className={`${
                      currentLocation === "/" ? "text-primary" : "text-white"
                    }`}
                  >
                    Home
                  </p>
                </NavLink>
                <NavLink to="/about-us">
                  <p
                    className={`${
                      currentLocation === "/about-us"
                        ? "text-primary"
                        : "text-white"
                    }`}
                  >
                    About Us
                  </p>
                </NavLink>
                <NavLink to="/services">
                  {" "}
                  <p
                    className={`${
                      currentLocation === "/services"
                        ? "text-primary"
                        : "text-white"
                    }`}
                  >
                    Services
                  </p>
                </NavLink>
                <NavLink to="/blog">
                  {" "}
                  <p
                    className={`${
                      currentLocation === "/blog"
                        ? "text-primary"
                        : "text-white"
                    }`}
                  >
                    Blog
                  </p>
                </NavLink>
                <NavLink
                  to="/contact-us"
                  className="bg-primary min-w-[100px] py-2 md:py-4 md:px-8 rounded-lg"
                >
                  Contact Us
                </NavLink>
              </div>
              <div className="hidden xl:flex items-center gap-4">
                <button className="border border-slate-500 p-2 ">
                  <SearchIcon fontSize="small" />
                </button>
                <button className="relative overflow-hidden border border-slate-500 p-2">
                  <ShoppingCartOutlinedIcon fontSize="small" />
                  <p className="absolute right-1 top-1 bg-primary text-xs p-px px-[5px] rounded-full">
                    5
                  </p>
                </button>
                <button className="flex items-center gap-2 bg-primary text-white py-2 md:p-4 rounded-lg">
                  <p>MAKE APPOINMENT</p>
                  <EastOutlinedIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Drawer open={open && isMaxWidth640} onClose={closeDrawer} anchor="right">
        <div className="min-w-[60vw] h-full  p-6  justify-start">
          <div className="flex flex-col items-start gap-8">
            <button onClick={closeDrawer} className="text-secondary">
              <CloseIcon fontSize="large" />
            </button>
            <img src={logo} alt="logo" className="m-auto w-full" />
            <div className=" flex flex-col items- gap-6 md:gap-10 text-white">
              <NavLink onClick={closeDrawer} to="/">
                <p
                  className={`${
                    currentLocation === "/" ? "text-primary" : "text-black"
                  } text-xl`}
                >
                  Home
                </p>
              </NavLink>
              <NavLink onClick={closeDrawer} to="/about-us">
                <p
                  className={`${
                    currentLocation === "/about-us"
                      ? "text-primary"
                      : "text-black"
                  } text-xl`}
                >
                  About Us
                </p>
              </NavLink>
              <NavLink onClick={closeDrawer} to="/services">
                {" "}
                <p
                  className={`${
                    currentLocation === "/services"
                      ? "text-primary"
                      : "text-black"
                  } text-xl`}
                >
                  Services
                </p>
              </NavLink>
              <NavLink onClick={closeDrawer} to="/blog">
                {" "}
                <p
                  className={`${
                    currentLocation === "/blog" ? "text-primary" : "text-black"
                  } text-xl`}
                >
                  Blog
                </p>
              </NavLink>
              <NavLink onClick={closeDrawer} to="/contact-us">

              <button className="bg-primary min-w-[100px] py-2 md:py-4 md:px-8 rounded-lg">
                Contact Us
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}
