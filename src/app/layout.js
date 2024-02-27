import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shifter - free Job Directory",
  description: "Shifter is a free modern and minimal job directory template designed specifically for Framer. Create an impressive job board website with ease using Shifter, and showcase job listings in a sleek and intuitive interface. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="container mx-auto px-4">
          {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
