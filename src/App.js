import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Experience from "./components/Experience/experience";
import Education from "./components/Education/education";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Experience/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
