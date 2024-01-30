
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Home from './components/Home';



function App() {

  return(
  <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

  </>


  );
}

export default App;
