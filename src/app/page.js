import HeroSlider from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-7xl font-bold text-center my-20">This is home page</h1>
      <HeroSlider />
    </div>
  );
}
