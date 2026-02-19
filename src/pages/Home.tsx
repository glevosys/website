import AboutUs from "../components/AboutUS";
import Contact from "../components/Conteact";
import Domain from "../components/Domain";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Innovation from "../components/Innovation";
import Intro from "../components/Intro";
import Mission from "../components/Mission";
import OurSolution from "../components/OurSolution";

const Home = () => {
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
