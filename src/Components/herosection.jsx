import React from "react";


export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-xl  max-w-6xl  mx-4 md:mx-auto gap-6">
      
      {/* Left: Image */}
      <div className="w-full md:w-1/2">
     <img
      src="/Portfolio Photo.jpg"
      alt="Nitin"
      className="rounded-2xl grayscale w-full h-auto max-h-[80vh] object-cover"
    />

    </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2 space-y-4">
        <div className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 rounded-xl p-4 text-white font-extrabold text-2xl sm:text-3xl md:text-4xl leading-snug">
         Hi, I’m Nitin Sapra — a passionate Full-Stack Web Developer with a strong focus on building scalable, user-centric digital experiences. 
        </div>

        <p className="text-gray-700 text-base sm:text-lg">
         With hands-on expertise in the MERN stack (MongoDB, Express.js, React, Node.js), I specialize in turning ideas into fully functional web applications.
        </p>

        <p className="text-gray-700 text-base sm:text-lg">
         From crafting responsive user interfaces to architecting robust backend systems, I aim to deliver solutions that are not just efficient but also impactful. I thrive in dynamic environments, constantly learning and evolving with the latest technologies to provide clean, maintainable code and smooth user experiences.
        </p>

         <p className="text-gray-700 text-base sm:text-lg">
         Whether you're a business looking to bring your digital vision to life or a fellow creator interested in collaborating, feel free to explore my work — and let’s connect!
        </p>
      </div>
    </div>
  );
}
