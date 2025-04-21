import { JSX } from "react";
import Navbar from "./components/navbar";
import Experiences from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";

const Home = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Hero />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
