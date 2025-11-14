import React from "react";
import health from "../assets/new2025/home/industrycard/health.webp"
import education from "../assets/new2025/home/industrycard/edu.webp"
import media from "../assets/new2025/home/industrycard/media.webp"
import HeadingwithSubheading from "../UtilityComponents/HeadingAndSubheading/HeadingwithSubheading";

export default function IndustryCards() {
  const cardData = [
    {
      id: 1,
      title: "Health Care",
      description:
        "Innovative solutions to improve patient care and streamline healthcare workflows.",
      image: health,
    },
    {
      id: 2,
      title: "Digital Media",
      description:
        "Advanced solutions for content creation, distribution and monetization.",
      image: media,
    },
    {
      id: 3,
      title: "Education",
      description:
        "Digital tools that enhance learning and improve administrative efficiency.",
      image: education,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        {/* <p className="text-blue-500 font-semibold text-sm">Industries We Serve</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          IT & Software Development Solutions For Industries
        </h2> */}

        <HeadingwithSubheading heading="Industries We Serve"  subheading = " IT & Software Development Solutions For Industries"/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}