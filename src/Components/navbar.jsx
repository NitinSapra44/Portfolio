import React from "react";

function Navbar(){
    return(
<nav className="fixed top-0 left-0 w-full z-50 bg-white flex flex-row gap-8 p-4 border shadow-md items-center justify-center">
  <a href="#about" className="font-bold hover:text-blue-600 transition text-xl">About</a>
  <a href="#skills" className="font-bold hover:text-blue-600 transition text-xl">Skills</a>
  <a href="#projects" className="font-bold hover:text-blue-600 transition text-xl">Projects</a>
  <a href="#contact" className="font-bold hover:text-blue-600 transition text-xl">Contact</a>
</nav>

    )
}

export default Navbar