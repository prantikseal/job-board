import Image from "next/image";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="bg-slate-900 px-10 py-14 text-white">
        <div className="container mx-auto flex lg:flex-row flex-col justify-between">
      <div className={`white-logo ${workSans.className} font-semibold text-2xl flex gap-4 justify-center items-start mb-5`}>
        <Image
          src="/logo-white.svg"
          alt="Shifter Logo"
          width={30}
          height={30}
          className=" w-max rounded-full"
        />
        Shifter
      </div>
      <div class="w-full md:w-1/2 lg:w-1/4 mb-4">
            <ul className='flex flex-col gap-5'>
                <li><a href="#" class="hover:text-gray-300">Software Engineer Jobs</a></li>
                <li><a href="#" class="hover:text-gray-300">Marketing Jobs</a></li>
                <li><a href="#" class="hover:text-gray-300">Graphic Design Jobs</a></li>
                <li><a href="#" class="hover:text-gray-300">UI Jobs</a></li>
            </ul>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 mb-4">
            <ul className='flex flex-col gap-5'>
                <li><a href="#" class="hover:text-gray-300">Sales Jobs</a></li>
                <li><a href="#" class="hover:text-gray-300">Admin Jobs</a></li>
                <li><a href="#" class="hover:text-gray-300">Customer Support Jobs</a></li>
                <li><a href="#" class="hover:text-gray-300">Development Jobs</a></li>
            </ul>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 mb-4">
            <p>Get instantly notified in your inbox when new jobs are added.</p>
            <input type="text" class="bg-white text-black rounded-lg w-full p-4 mt-3 outline-none" placeholder="Enter your email" />
            <button class="bg-black px-8 py-5 text-white font-normal rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out mt-5 w-full">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
