import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faLightbulb, faHandshake } from "@fortawesome/free-solid-svg-icons";

const SectionResearchInnovation = () => {
  const cards = [
    {
      icon: faBook,
      title: "Articles et Publications",
      description:
        "Découvrez nos dernières recherches et publications dans le domaine de la technologie et de l'ingénierie.",
      link: "/articles",
    },
    {
      icon: faLightbulb,
      title: "Projets en Cours",
      description:
        "Nous travaillons sur plusieurs projets innovants qui façonneront l'avenir de l'industrie.",
      link: "/projects",
    },
    {
      icon: faHandshake,
      title: "Partenariats",
      description:
        "Nous collaborons avec des universités et des centres de recherche pour développer des solutions de pointe.",
      link: "/partnerships",
    },
  ];

  return (
    <section id="rd" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Recherche et Innovation</h2>
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

export default SectionResearchInnovation;