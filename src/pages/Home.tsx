import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutUs from "../components/AboutUS";
import Contact from "../components/Contact";
import Domain from "../components/Domain";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Innovation from "../components/Innovation";
import Intro from "../components/Intro";
import Mission from "../components/Mission";
import OurSolution from "../components/OurSolution";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <>
      <Header />
      <Intro />
      <Innovation />
      <AboutUs />
      <OurSolution />
      <Mission />
      <Domain />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
