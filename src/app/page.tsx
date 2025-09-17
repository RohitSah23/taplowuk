import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
    <Hero />
    
    <About/>
    </div>
  );
}
