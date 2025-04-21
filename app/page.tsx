import { JSX } from "react";
import Navbar from "./components/navbar";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";

const Home = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
