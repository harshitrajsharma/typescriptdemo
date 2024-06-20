import Explore from "@/components/Explore";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Variety from "@/components/Variety";
import Accordion from "../Accordion";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <div className="bg-[#121921] text-white">
      <Hero />
      <Explore />
      <Variety />
      <Featured />
      <Services />
      <Stats />
      <Reviews />
      <Accordion />
      <Footer />
    </div>
  );
}
