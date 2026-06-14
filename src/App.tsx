import { motion } from "framer-motion";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/ui/BackToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Activities from "@/components/sections/Activities";
import Projects from "@/components/sections/Projects";
import Gallery from "@/components/sections/Gallery";
import Team from "@/components/sections/Team";
import Achievements from "@/components/sections/Achievements";
import Events from "@/components/sections/Events";
import Testimonials from "@/components/sections/Testimonials";
import Volunteer from "@/components/sections/Volunteer";
import Donation from "@/components/sections/Donation";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Hero />
        <About />
        <Stats />
        <Activities />
        <Projects />
        <Gallery />
        <Team />
        <Achievements />
        <Events />
        <Testimonials />
        <Volunteer />
        <Donation />
        <Blog />
        <Contact />
      </motion.main>
      <Footer />
      <BackToTop />
    </>
  );
}
