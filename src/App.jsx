import Navbar from './components/Navbar.jsx';
import Home from './sections/Home.jsx';
import About from './sections/About.jsx';
import Project from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import './index.css';
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id='projects'>
        <Project/>
      </div>

      <div id='skills'>
        <Skills/>
      </div>

      <div id="contact">
        <Contact/>
      </div>

      <Footer/>
    </>

  )
}

export default App
