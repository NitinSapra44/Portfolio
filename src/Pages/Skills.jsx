import React from "react"; 

export default function Skills(){
    return(
        <div>
       <section id="skills" className="min-h-screen scroll-mt-24 pt-10 ">
        <div className="max-w-6xl mx-auto">
        <p className="text-4xl font-bold p-4">Skills</p>
        <div className="max-w-full p-5  gap-x-6 gap-y-6  mx-auto grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2">
            <div className="w-48 flex flex-col items-center justify-center  border h-48 rounded-xl shadow-lg">
                <img src="/Nodejs.png" alt="Nodejs" className="object-contain w-24 h-24"/>
                <p className="text-lg">NodeJs</p>
            </div>
            <div className="w-48  border flex flex-col items-center justify-center h-48 rounded-xl shadow-lg"> 
                 <img src="/MongoDB.png" alt="MongoDB" className="object-contain w-24 h-24"/>
                <p className="text-lg">MongoDB</p>
            </div>
             <div className="w-48  border flex flex-col items-center justify-center h-48 rounded-xl shadow-lg"> 
                 <img src="/Express.png" alt="Express" className="object-contain w-24 h-24"/>
                <p className="text-lg">Express</p>
            </div>
            <div className="w-48  border flex flex-col items-center justify-center h-48 rounded-xl shadow-lg"> 
                <img src="/React.png" alt="React" className="object-contain w-24 h-24"/>
                <p className="text-lg">React</p>
            </div>
            <div className="w-48  border flex flex-col items-center justify-center h-48 rounded-xl shadow-lg"> 
                <img src="/React Router.svg" alt="React-Router-Dom" className="object-contain w-24 h-24"/>
                <p className="text-lg">React Router Dom</p>
            </div>
              <div className="w-48  border flex flex-col items-center justify-center h-48 rounded-xl shadow-lg"> 
                <img src="/JavaScript.png" alt="JavaScript" className="object-contain w-24 h-24"/>
                <p className="text-lg">JavaScript</p>
            </div>
            <div className="w-48  border flex flex-col items-center justify-center h-48 rounded-xl shadow-lg"> 
                <img src="/HTML.png" alt="HTML" className="object-contain w-24 h-24"/>
                <p className="text-lg">HTML</p>
            </div>
            <div className="w-48  border flex flex-col items-center justify-center h-48 rounded-xl shadow-lg"> 
                <img src="/CSS.png" alt="CSS" className="object-contain w-24 h-24"/>
                <p className="text-lg">CSS</p>
            </div>
             <div className="w-48  border flex flex-col items-center justify-center h-48 rounded-xl shadow-lg"> 
                <img src="/Tailwind.png" alt="Tailwind" className="object-contain w-24 h-24"/>
                <p className="text-lg">Tailwind CSS</p>
            </div>
            <div className="w-48  border flex flex-col items-center justify-center h-48 rounded-xl shadow-lg"> 
                <img src="/GITHUB.png" alt="Github" className="object-contain w-24 h-24"/>
                <p className="text-lg">GitHub</p>
            </div>
        </div>
        </div>
        </section>
        </div>
    )
}