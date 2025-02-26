import Image from "next/image";
import Navbar from "../components/Navbar";
import Cards from "@/components/Cards";
import Hero2 from "@/components/Hero2"
import Hero1 from "@/components/Hero1";

export default function Home() {
  return (
    <>
      {/* <div className="flex justify-center items-center">
        <Navbar />
      </div>
      <Hero2 />
      <Cards /> */}
      <Hero1 />
    </>
  );
}
