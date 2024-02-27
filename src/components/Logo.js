
import { Work_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const workSans = Work_Sans({ subsets: ["latin"] });
const Logo = () => {
  return (
    <Link href="/" className={`${workSans.className} font-semibold text-2xl flex gap-1 justify-center items-center`}>
       <Image src="/logo-black.svg" alt="Shifter Logo" width={30} height={30} className=" w-max rounded-full"/>
        Shifter
    </Link>
  )
}

export default Logo