import "./App.css";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Contacts from "./components/Contacts/Contacts";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <div className="container">
      <div className="stars"></div>
      <div className="stars2"></div>
      <Menu />
      <Banner />
      <About />
      <Projects />
      <Skills/>
      <Certifications />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
