import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faHeadset } from "@fortawesome/free-solid-svg-icons";

const SectionFaqSupport = () => {
  const cards = [
    {
      icon: faQuestionCircle,
      title: "Questions Fréquentes",
      description: "Trouvez des réponses aux questions les plus fréquentes sur nos services et produits.",
      link: "/faq",
    },
    {
      icon: faHeadset,
      title: "Support Technique",
      description: "Contactez notre équipe de support pour obtenir de l'aide sur vos projets.",
      link: "/support",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">FAQ et Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

export default SectionFaqSupport;