import Curriculum from "./components/Curriculum";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Programs from "./components/Programs";
import Projects from "./components/Projects";
import Stories from "./components/Stories";
import Trust from "./components/Trust";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground noise overflow-x-hidden">
      <Nav />
      <Hero />
      <Trust />
      <Programs />
      <WhyUs />
      <Journey />
      <Projects />
      <Stories />
      <Curriculum />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
