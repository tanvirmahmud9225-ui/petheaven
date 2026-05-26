import HeroSlider from "@/components/Hero";
import HomepagePets from "@/components/HomepagePets";
import OurMission from "@/components/OurMission";
import PetCareTips from "@/components/PetCareTips";
import Review from "@/components/Review";
import WhyAdopt from "@/components/WhyAdopt";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <HomepagePets />
      <WhyAdopt />
      <Review />
      <PetCareTips />
      <OurMission />
    </div>
  );
}
