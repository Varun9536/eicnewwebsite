// import React from "react";
// import Clients from "./Clients";

// function Clientele() {
//   return (
//     <div className="relative font-manrope text-blackk mb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       <div className="absolute inset-0 w-full h-full -z-10">
//         <div className="bg-map bg-no-repeat bg-cover bg-center h-full w-full opacity-70"></div>
//       </div>

//       <div className="relative max-w-5xl mx-auto">
//         <h2 className="text-bloo text-center fontsize_2 font-600 mb-2 sm:mb-3">
//           Journey so far
//         </h2>
//         <h1 className="text-center fontsize_6 font-600 mb-8 sm:mb-12 lg:mb-16">
//           Milestones and Achievements
//         </h1>

//         {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12"> */}
//         <div style={{display :"flex" , justifyContent : "space-between" , columnGap : "1rem" }}>
//           <Milestone number="14+" text="Years" smallText="Of Experience" />
//           <Milestone
//             number="150+"
//             text="Projects"
//             smallText="Delivered Successfully"
//           />
//           <Milestone number="60+" text="Clients" smallText="Globally" />
       
//         </div>
        
//       </div>
//     </div>
//   );
// }

// function Milestone({ number, text, smallText }) {
//   return (
//     <div className="text-center">
//       <div className="text-bloo font-600 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-2">
//         {number}
//       </div>
//       <div className="font-semibold text-base sm:text-lg lg:text-xl mb-1">
//         {text}
//       </div>
//       <div className="text-sm lg:text-base text-gray-600">{smallText}</div>
//     </div>
//   );
// }

// export default Clientele;



import React from "react";
import { FaUserAlt, FaRegCalendarAlt } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import milestonebg from "../assets/new2025/home/milestone/footer.png"

export default function Clientele() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage: `url(${milestonebg})`, // 🖼️ Put your background image path here
      }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered glass box */}
      <div className="relative max-w-4xl mx-auto text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 text-center shadow-lg">
        <p className="text-sm uppercase font-semibold tracking-wider text-gray-200 mb-2">
          Journey So Far
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Milestones and Achievements
        </h2>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 text-center">
          {/* 10 Years */}
          <div className="flex flex-col items-center">
            <BsStopwatch className="text-4xl mb-2 text-white" />
            <h3 className="text-4xl font-extrabold">10</h3>
            <p className="text-sm font-medium uppercase tracking-wide text-gray-200">
              Years
            </p>
          </div>

          <div className="hidden md:block w-[1px] h-16 bg-white/40"></div>

          {/* 150+ Projects */}
          <div className="flex flex-col items-center">
            <FaRegCalendarAlt className="text-4xl mb-2 text-white" />
            <h3 className="text-4xl font-extrabold">150+</h3>
            <p className="text-sm font-medium uppercase tracking-wide text-gray-200">
              Projects
            </p>
          </div>

          <div className="hidden md:block w-[1px] h-16 bg-white/40"></div>

          {/* 60+ Clients */}
          <div className="flex flex-col items-center">
            <FaUserAlt className="text-4xl mb-2 text-white" />
            <h3 className="text-4xl font-extrabold">60+</h3>
            <p className="text-sm font-medium uppercase tracking-wide text-gray-200">
              Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
