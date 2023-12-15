import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";
import Academics from "./components/Academics/academics";
import Skills from './components/Skills/skills'
import Works from "./components/Projects/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Internship from "./components/Internships/internship";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Academics />
      <Skills />
      <Works />
      <Internship />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
