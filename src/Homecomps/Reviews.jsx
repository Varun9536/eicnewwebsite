// import React, { useState, useEffect } from "react";
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";
// import { CgLayoutGridSmall } from "react-icons/cg";

// function Reviews() {
//   const testimonials = [
//     {
//       quote:
//         "The app was created as desired, although a few bugs had made it through the QA team but EICE's communication was great and all issues and bugs were resolved on time.",
//       name: "Nathan Foreman",
//       title: "IT Professional",
//     },
//     {
//       quote:
//         "EICE completed my project on time and correctly. Even when we had multiple contracts ongoing at the same time, EICE ensured that the product was correctly made without fault.",
//       name: "AoGe He",
//       title: "CEO - Yidian Internet Technology",
//     },
//     {
//       quote:
//         "EICE developers did a good job developing this project, some issues had come but were resolved satisfactorily. EICE were polite and helpful in their communication.",
//       name: "Weston Argo",
//       title: "Owner - Groundwork Systems",
//     },
//     {
//       quote:
//         "Great work on digging into an existing project. Understanding the underlying tech and business issues and then fixing it up into something we're proud to have. Good Work!",
//       name: "Uzis Rozkalns",
//       title: "Delivery lead - HSBC",
//     },
//     {
//       quote:
//         "EICE developers did a good job developing this project, some issues had come but were resolved satisfactorily. EICE were polite and helpful in their communication.",
//       name: "Weston Argo",
//       title: "Owner - Groundwork Systems",
//     },
//     {
//       quote:
//         "Great work on digging into an existing project. Understanding the underlying tech and business issues and then fixing it up into something we're proud to have. Good Work!",
//       name: "Uzis Rozkalns",
//       title: "Delivery lead - HSBC",
//     },
//     {
//       quote:
//         "EICE developers did a good job developing this project, some issues had come but were resolved satisfactorily. EICE were polite and helpful in their communication.",
//       name: "Weston Argo",
//       title: "Owner - Groundwork Systems",
//     },
//     {
//       quote:
//         "Great work on digging into an existing project. Understanding the underlying tech and business issues and then fixing it up into something we're proud to have. Good Work!",
//       name: "Uzis Rozkalns",
//       title: "Delivery lead - HSBC",
//     },

//     {
//       quote:
//         "EICE developers did a good job developing this project, some issues had come but were resolved satisfactorily. EICE were polite and helpful in their communication.",
//       name: "Weston Argo",
//       title: "Owner - Groundwork Systems",
//     },

//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 3 : prevIndex - 3
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex >= testimonials.length - 3 ? 0 : prevIndex + 3
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-white relative text-blackk py-6 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-left text-bloo font-600 text-2xl sm:text-3xl mx-auto md:text-3xl lg:text-[32px] py-1">
//           We Made Them Happy
//         </h1>
//         <h2 className="text-blackk/60 font-semibold text-start fontsize_2  py-2 pb-12 ">
//           Trusted by Over{" "}
//           <span className="font-600 text-blackk">60+ Companies</span> in the{" "}
//           <span className="font-600 text-blackk">Past Decade</span>. Join Our
//           Success Story!
//         </h2>
//         <div className="relative">
//           <div className="flex flex-col md:flex-row gap-8 sm:h-full h-[670px]">
//             {[currentIndex, currentIndex + 1].map((index) => (
//               <div
//                 key={index}
//                 className="flex-1 items-center justify-center pt-10 lg:h-64 bg-white p-6 rounded-lg shadow-md"
//               >
//                 <p className="font-semibold italic text-lg mb-6">
//                   "{testimonials[index].quote}"
//                 </p>
//                 <div className="font-semibold">
//                   <p className="font-600 text-xl mb-1">
//                     {testimonials[index].name}
//                   </p>
//                   <p className="text-bloo italic">
//                     {testimonials[index].title}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center cursor-pointer pt-8 space-x-2">
//           {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
//             (_, index) => (
//               <div
//                 size={40}
//                 key={index}
//                 className={`${
//                   currentIndex === index * 3
//                     ? "px-3 py-1 rounded-xl bg-blue-900"
//                     : "px-3 py-1 rounded-xl bg-bloo/30"
//                 }`}
//                 onClick={() => setCurrentIndex(index * 2)}
//               />
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Reviews;

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Styles/reviews.css";

const baseReviews = [
  {
    name: "Zack Robbins",
    post: "CEO",
    quote:
      "EICE has been instrumental in transforming our energy operations. Their digital solutions have streamlined our processes, enhanced efficiency, and ultimately improved our bottom line. Their team's expertise and dedication to our success have made them a trusted partner for our business.",
    img: "",
  },
  {
    name: "Jessica Mir",
    post: "Senior Executive",
    quote:
      "EICE's digital transformation services have significantly enhanced our financial operations. Their tailored solutions have optimized our workflows, reduced costs, and improved decision-making processes. We value their expertise and the seamless collaboration we have experienced with their team.",
    img: "",
  },
  {
    name: "Vijay Gupta",
    post: "CEO",
    quote:
      "Working with EICE has been a game-changer for our retail business. Their cutting-edge solutions have boosted our customer engagement, streamlined inventory management, and increased our overall productivity. EICE's dedication to our success makes them an invaluable partner.",
    img: "",
  },
];

// Repeat to make total 9 slides
const reviews = [...baseReviews, ...baseReviews, ...baseReviews];

export default function Reviews() {
  const swiperRef = useRef(null);

  return (
    <div className="bg-white  py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold  mb-3">
          We Made Them <span className="text-bloo">Happy.</span>
        </h2>
        <p className="text-gray-500 text-lg mb-10">
          Trusted by Over{" "}
          <span className="font-semibold text-bloo">60+ Companies</span> in
          the <span className="font-semibold text-bloo">Past Decade</span>.
          Join Our Success Story!
        </p>

        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={3} // ✅ group 3 slides per swipe
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
          className="pb-12 my-swiper"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="border border-gray-200 rounded-lg shadow-sm p-6 h-full flex flex-col justify-between hover:shadow-md transition-all">
                <p className=" text-gray-700 text-[16px] leading-relaxed mb-6">
                  "{r.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  {r.img ? (
                    <img
                      src={r.img}
                      alt={r.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">
                      {r.name}
                    </h4>
                    <p className="text-blue-600 font-semibold text-sm">
                      {r.post}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
