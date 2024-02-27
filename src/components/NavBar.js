"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import DropDown from "./DropDown";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Close the mobile menu when the window is resized
      setMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container mx-auto">
      <header className="pt-4 pb-7 px-10 flex justify-between items-center">
        <div className="logo-and-search flex gap-8 ">
          <Logo />
          <button className="search cursor-pointer border border-gray-300 rounded-lg lg:flex hidden items-center text-slate-500 shadow-lg gap-3 px-4 py-4 flex-grow min-w-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-slate-500 w-4 h-auto"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            Search for a job
          </button>
        </div>
        <div
          className={`category-and-post-a-job flex gap-4 ${
            isMobileMenuOpen ? "hidden" : "block"
          }`}
        >
          <div
            className={`browse-by-category group md:hidden block ${
              isMobileMenuOpen
                ? "relative"
                : "absolute top-20 left-20 w-screen bg-white z-10"
            }`}
          >
            {/* <button className="bg-white px-3 py-2 font-normal md:block hidden"> */}
            <button className="bg-white px-3 py-2 font-normal">
              <div className="flex gap-2">
                <span>Browse by Category</span>
                <Image
                  src="/down-arrow.svg"
                  alt="down arrow"
                  width={20}
                  height={20}
                />
              </div>
            </button>
            <DropDown />
          </div>
          <div className="browse-by-category group md:block hidden relative">
            <button className="bg-white px-3 py-2 font-normal">
              <div className="flex gap-2">
                <span>Browse by Category</span>
                <Image
                  src="/down-arrow.svg"
                  alt="down arrow"
                  width={20}
                  height={20}
                />
              </div>
            </button>
            <DropDown />
          </div>
          <Link href="/post-a-job">
            <button className="bg-white px-3 py-2 border border-slate-300 border-opacity-50 font-normal rounded-xl hover:border-slate-600 hover:border-opacity-100 transition-all duration-300 ease-in-out md:block hidden">
              Post a Job on Shifter
            </button>
          </Link>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="search cursor-pointer lg:hidden block items-center text-slate-500 min-w-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="max-w-4 max-h-4"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </header>
    </div>
  );
};

export default NavBar;
