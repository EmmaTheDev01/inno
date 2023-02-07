import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Work from "../../components/Work";
import Clients from "../../components/Clients";
import "./home.css";
function Home() {
  return (
    <div>
    {/* Hero section */}
      <Hero />
      {/* About us section */}
      <About />
      {/* Services section */}
      <Services />
      {/* Our work section */}
      <Work />
      {/* Our partners and clients section */}
      <Clients />
      {/* Contact us section */}
      <Contact />
    
    </div>
  );
}

export default Home;
