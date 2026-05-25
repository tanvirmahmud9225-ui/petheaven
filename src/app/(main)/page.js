import HeroSlider from "@/components/Hero";
import HomepagePets from "@/components/HomepagePets";
import PetCareTips from "@/components/PetCareTips";
import WhyAdopt from "@/components/WhyAdopt";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <HomepagePets />
      <WhyAdopt />
      <PetCareTips />
    </div>
  );
}
