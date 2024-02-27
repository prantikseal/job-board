import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="container mx-auto">
    <header className="pt-4 pb-7 px-10 flex justify-between items-center">
      <div className="logo-and-search flex gap-8 ">
        <Logo />
        {/* add shadow */}
        <button className="search cursor-pointer border border-gray-300 rounded-lg lg:flex hidden items-center text-slate-500 shadow-lg gap-3 px-4 py-4 flex-grow min-w-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" fill-slate-500 w-4 h-auto"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          Search for a job
        </button>
      </div>
      <div className="category-and-post-a-job flex gap-4">
        {/* dropdown browse by category */}
        <div className="browse-by-category relative">
          <button className="bg-white px-3 py-2 font-normal md:block hidden">
            <div className="flex gap-2">
            <span>Browse by Category</span>
            <Image src="/down-arrow.svg" alt="down arrow" width={20} height={20} />
            </div>
          </button>
        </div>
        <Link href="/post-a-job">
      <button className=" bg-white px-3 py-2 border border-slate-300 border-opacity-50 font-normal rounded-xl hover:border-slate-600 hover:border-opacity-100 transition-all duration-300 ease-in-out md:block hidden">
        Post a Job on Shifter
      </button>
    </Link>
      </div>
    </header>
    </div>  
  );
};

export default NavBar;
