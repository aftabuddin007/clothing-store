import HeroBanner from "@/components/HeroBanner";
import Newsletter from "@/components/NewsLetter";
import ProductSection from "@/components/ProductSection";
import Testimonials from "@/components/Testmonial";
import WhyChooseUs from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <HeroBanner></HeroBanner>
    
    <ProductSection></ProductSection>
    <WhyChooseUs></WhyChooseUs>
    <Testimonials></Testimonials>
    <Newsletter></Newsletter>
    </div>
  );
}
