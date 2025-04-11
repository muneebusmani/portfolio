import { JSX } from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

const Home = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
