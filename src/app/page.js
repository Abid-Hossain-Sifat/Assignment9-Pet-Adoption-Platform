import Hero from "@/Components/Hero";
import Process from "@/Components/Process";
import WhyAdopt from "@/Components/WhyAdopt";
import Review from "@/Components/Review";
import PetCare from "@/Components/PetCare";
import Connect from "@/Components/Connect";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <WhyAdopt />
      <Process />
      <Review />
      <PetCare />
      <Connect></Connect>
    </div>
  );
}
