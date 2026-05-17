import Hero from "@/Components/Hero";
import Process from "@/Components/Process";
import WhyAdopt from "@/Components/WhyAdopt";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <WhyAdopt />
      <Process />
    </div>
  );
}
