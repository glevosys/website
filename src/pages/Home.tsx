import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutUs from "../components/AboutUS";
import Contact from "../components/Contact";
import Domain from "../components/Domain";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Mission from "../components/Mission";
import OurSolution from "../components/OurSolution";
import Why from "../components/Why";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [hash]);

  return (
    <>
      <Header />
      <Intro />
      <AboutUs />
      <OurSolution />
      <Mission />
      <Domain />
      <Why />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
