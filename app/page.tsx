import { JSX } from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";

const Home = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
};

export default Home;
