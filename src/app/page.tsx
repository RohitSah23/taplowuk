import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import JoinCoachesSection from "@/components/JoinCoaches/JoinCoaches";
import LeaguesSection from "@/components/League/League";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
    <Hero />
    
    <About/>
    <JoinCoachesSection/>
    <LeaguesSection/>
    </div>
  );
}
