

// import React from "react";

// import styles from "./Styles/case.module.css"
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";


// function Casestudies() {



//   const [isMobile, setIsMobile] = useState(window.innerWidth < 540);
//   const [isMobile2, setIsMobile2] = useState(window.innerWidth < 400);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 540);
//       setIsMobile2(window.innerWidth < 400);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return (
//     <>


//       { ! isMobile && (<div className=" font-manrope ">

//         <h2 className="text-bloo  text-center fontsize_2 font-600  ">
//           Case Study
//         </h2>
//         <h1 className="text-blackk  font-600 text-center text-2xl sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
//           Explore the journeys behind the successful products we deliver
//         </h1>



//         <div className={styles.case_box}>



//           <Link to={"/Industries-Healthcare"}>
//             <div className={styles.big_img}>

//               <div className={styles.heading}>
//                 HEALTHCARE
//               </div>
//               <div className={styles.sub_heading}>
//                 Innovative solutions to improve patient care and streamline healthcare operations.
//               </div>

//             </div>
//           </Link>

//           <div className={styles.four_img}>

//             <div className={styles.upper}>


//               {/* upper image 1 */}

//               <Link to={"Casestudies"}>
//                 <div className={styles.upper1}>
//                   <div className={styles.right_subheadimg}>
//                     Connect Car Platform
//                   </div>
//                 </div>
//               </Link>



//               {/* upper img 2 */}

//               <Link to={"Casestudies"}>
//                 <div className={styles.upper2}>
//                   <div className={styles.right_subheadimg}>
//                     EV Battery Management
//                   </div>
//                 </div>
//               </Link>


//             </div>

//             <div className={styles.lower}>


//               <Link to={"/Casestudy-DesignSimBORETS"}>
//                 <div className={styles.lower1}>
//                   <div className={styles.right_subheadimg}>
//                     OIL And Gas Products
//                   </div>
//                 </div>
//               </Link>


//               <Link to={"/Casestudy-SimuLIFT"}>
//                 <div className={styles.lower2}>
//                   <div className={styles.right_subheadimg}>Simulift</div>
//                 </div>
//               </Link>



//             </div>


//           </div>
//         </div>



//       </div>)}


//       { isMobile2 && (<div className=" font-manrope ">

// <h2 className="text-bloo  text-center fontsize_2 font-600  ">
//   Case Study
// </h2>
// <h1 className="text-blackk  font-600 text-center text-2xl sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
//   Explore the journeys behind the successful products we deliver
// </h1>



// <div className={styles.case_box}>



//   <Link to={"/Industries-Healthcare"}>
//     <div className={styles.big_img}>

//       <div className={styles.heading}>
//         HEALTHCARE
//       </div>
//       <div className={styles.sub_heading}>
//         Innovative solutions to improve patient care and streamline healthcare operations.
//       </div>

//     </div>
//   </Link>

//   <div className={styles.four_img}>

//     <div className={styles.upper}>


//       {/* upper image 1 */}

//       <Link to={"Casestudies"}>
//         <div className={styles.upper1}>
//           <div className={styles.right_subheadimg}>
//             Connect Car Platform
//           </div>
//         </div>
//       </Link>



//       {/* upper img 2 */}

//       <Link to={"Casestudies"}>
//         <div className={styles.upper2}>
//           <div className={styles.right_subheadimg}>
//             EV Battery Management
//           </div>
//         </div>
//       </Link>


//     </div>

//     <div className={styles.lower}>


//       <Link to={"/Casestudy-DesignSimBORETS"}>
//         <div className={styles.lower1}>
//           <div className={styles.right_subheadimg}>
//             OIL And Gas Products
//           </div>
//         </div>
//       </Link>


//       <Link to={"/Casestudy-SimuLIFT"}>
//         <div className={styles.lower2}>
//           <div className={styles.right_subheadimg}>Simulift</div>
//         </div>
//       </Link>



//     </div>


//   </div>
// </div>



// </div>)}


//     </>
//   );
// }

// export default Casestudies;



import React from 'react';
import laptop  from "../assets/new2025/home/caseStudy/Casestudy.webp"
import tab from "../assets/new2025/home/caseStudy/Tab.png"

const CaseStudiesSection = () => {
  return (
    <section className="relative w-full h-[30rem] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src="/path/to/background-video.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-11/12 max-w-7xl gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h4 className="font-600 font-20px blueTextGlobalClass">Case Studies</h4>
          <h2 className="text-3xl md:text-4xl  leading-snug">
            Happy chills, contentment, gratification, fruition. <br />
            <span className="text-white font-bold">Check our Detailed case Studies</span>
          </h2>
          <button className="mt-6 px-6 py-3  text-white font-semibold border border-white
 transition">
            View More →
          </button>
        </div>

        {/* Laptop Image Section */}
        <div className="md:w-1/2 relative flex justify-center">
          {/* Main Laptop Image */}
          <img
            src={laptop}
            alt="Laptop"
            className="w-[85%] md:w-[80%] drop-shadow-2xl relative z-10"
          />

          {/* Secondary Overlay Image (on top-left of laptop) */}
          {/* <img
            src={tab}
            alt="Overlay"
            className="absolute top-[10%] left-[15%] w-[20%] md:w-[15%] animate-float z-20"
          /> */}

          {/* Small Floating Icon/Image (top-right of laptop) */}
          <img
            src={tab}
            alt="Floating Icon"
            className="absolute top-[8%] right-[15%] w-[12%] md:w-[10%] animate-bounce z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
