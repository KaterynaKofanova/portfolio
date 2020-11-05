import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from './components/Navigation'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'



function App() {
  return (
    <div className="App">
      <Navigation/>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
