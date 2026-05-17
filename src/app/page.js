import Hero from "@/Components/Hero";
import Process from "@/Components/Process";
import WhyAdopt from "@/Components/WhyAdopt";
import Review from "@/Components/Review";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <WhyAdopt />
      <Process />
      <Review />
    </div>
  );
}
