import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faUsers, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

const SectionPartnershipsCollaboration = () => {
  const cards = [
    {
      icon: faHandshake,
      title: "Partenaires Stratégiques",
      description: "Nos partenaires stratégiques qui nous aident à réaliser des projets innovants.",
      link: "/partners",
    },
    {
      icon: faUsers,
      title: "Collaborations",
      description: "Nos collaborations avec des entreprises et des institutions de renom.",
      link: "/collaborations",
    },
    {
      icon: faProjectDiagram,
      title: "Projets Conjoints",
      description: "Découvrez les projets que nous avons réalisés en collaboration avec nos partenaires.",
      link: "/joint-projects",
    },
  ];

  return (
    <section id="partnerships" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Partenariats et Collaborations</h2>
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

export default SectionPartnershipsCollaboration;