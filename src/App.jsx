import React from "react"   
import Navbar from "./Components/navbar.jsx"
import About from "./Pages/About.jsx"
import Skills from "./Pages/Skills.jsx"
import Projects from "./Pages/Projects.jsx"
import Contact from "./Pages/Contact.jsx"
function App() {

  return (
   <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
  <Navbar />
  <About />
  <Skills />
  <Projects/>
  <Contact/>
</div>

    
  )
}

export default App
