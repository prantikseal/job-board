import Image from "next/image";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="bg-slate-900 px-10 py-14">
        <div className="container mx-auto">
      <div className={`white-logo ${workSans.className} font-semibold text-2xl flex gap-4 text-white`}>
        <Image
          src="/logo-white.svg"
          alt="Shifter Logo"
          width={30}
          height={30}
          className=" w-max rounded-full"
        />
        Shifter
      </div>
      </div>
    </div>
  );
};

export default Footer;
