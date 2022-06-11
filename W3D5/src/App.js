import "./styles.css";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Summary from "./Components/Summary";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutMe />
      <Summary />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
