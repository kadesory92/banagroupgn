import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUserGraduate, faUsers } from "@fortawesome/free-solid-svg-icons";

const SectionCareers = () => {
  const cards = [
    {
      icon: faBriefcase,
      title: "Offres d'Emploi",
      description: "Consultez nos offres d'emploi et rejoignez notre équipe dynamique.",
      link: "/jobs",
    },
    {
      icon: faUserGraduate,
      title: "Stages",
      description:
        "Nous offrons des opportunités de stage pour les étudiants passionnés par la technologie et l'ingénierie.",
      link: "/internships",
    },
    {
      icon: faUsers,
      title: "Culture d'Entreprise",
      description: "Découvrez notre culture d'entreprise et les avantages de travailler chez BANA-GROUP.",
      link: "/culture",
    },
  ];

  return (
    <section id="careers" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Carrières</h2>
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

export default SectionCareers;