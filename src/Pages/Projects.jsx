import React from "react";
import InventoryManagement from "../Components/InventoryManagement.jsx";
import AgainstTheTribe from "../Components/AgainstTheTribe.jsx";
export default function Projects(){
    return(
        <section id="projects" className="h-screen mt-24 scroll-mt-24 pt-10 ">
         <div className="max-w-6xl mx-auto flex flex-col px-5">
            <p className="text-4xl font-bold mb-3 p-4">Projects</p>
            <div className="w-full gap-6 mx-auto grid md:grid-cols-2 sm:grid-cols ">
            <InventoryManagement/>
            <AgainstTheTribe/>
            
            </div>
         </div>
        </section>
        
    )
}