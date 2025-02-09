import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faCogs, faHardHat } from "@fortawesome/free-solid-svg-icons";

const SectionNewsBlog = () => {
  const cards = [
    {
      icon: faLaptopCode,
      title: "Technologie",
      description: "Les dernières tendances et innovations dans le domaine de la technologie.",
      link: "/technology",
    },
    {
      icon: faCogs,
      title: "Ingénierie",
      description: "Actualités et analyses sur les avancées en ingénierie.",
      link: "/engineering",
    },
    {
      icon: faHardHat,
      title: "Construction",
      description: "Découvrez les derniers projets et innovations dans le domaine de la construction.",
      link: "/construction",
    },
  ];

  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Actualités et Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon icon={card.icon} className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-700 mb-4">{card.description}</p>
              <a href={card.link} className="text-blue-600 hover:text-blue-800">
                En savoir plus →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionNewsBlog;