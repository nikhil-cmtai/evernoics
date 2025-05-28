import HeroSection from "@/components/home/hero-section";
import IndustryWeServe from "@/components/home/industry-we-serve";  
import AllInOne from "@/components/home/all-iin-one";
import Testimonial from "@/components/home/testimonial";
import WhyChooseUs from "@/components/home/why-choose-us";
import HowWeAre from "@/components/home/how-we-are";
import VehicleMarquee from '../components/home/vehicle-marquee';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Location Track",
  description: "Home Page",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowWeAre />
      <WhyChooseUs />
      <AllInOne />
      <VehicleMarquee />
      <IndustryWeServe />
      <Testimonial />
    </>
  );
} 