import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import JoinCoachesSection from "@/components/JoinCoaches/JoinCoaches";
import LeaguesSection from "@/components/League/League";
import Sponsors from "@/components/Sponsors/Sponsors";

export default function Home() {
  return (
    <div>
      <Header />
    <Hero />
    
    <About/>
    <JoinCoachesSection/>
    <LeaguesSection/>
    <Sponsors/>
    <Footer/>
    </div>
  );
}
