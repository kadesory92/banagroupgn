import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faLightbulb,
  faUsers,
  faLeaf,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

const SectionValues = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Pour gérer l'index du slide actuel

  // Données pour le carrousel
  const values = [
    {
      icon: faHandHoldingHeart,
      title: "Intégrité",
      description:
        "Nous agissons avec honnêteté et transparence dans toutes nos interactions. L'intégrité est au cœur de notre culture d'entreprise et guide chacune de nos décisions.",
    },
    {
      icon: faLightbulb,
      title: "Innovation",
      description:
        "Nous croyons en une approche innovante pour résoudre les défis complexes. Notre équipe explore constamment de nouvelles technologies et méthodologies pour rester à la pointe de l'industrie.",
    },
    {
      icon: faUsers,
      title: "Collaboration",
      description:
        "Nous travaillons en étroite collaboration avec nos clients et partenaires pour atteindre des résultats exceptionnels. Notre approche collaborative garantit que chaque projet est aligné sur les objectifs et les valeurs de nos partenaires.",
    },
    {
      icon: faLeaf,
      title: "Durabilité",
      description:
        "Nous nous engageons à promouvoir des pratiques respectueuses de l'environnement dans tous nos projets. De la conception à la réalisation, nous intégrons des solutions écologiques pour minimiser notre impact sur la planète.",
    },
    {
      icon: faAward,
      title: "Excellence",
      description:
        "Nous visons l'excellence dans tout ce que nous entreprenons. Que ce soit dans la qualité de nos services ou dans la satisfaction de nos clients, nous nous efforçons de dépasser les attentes.",
    },
  ];
  

  // Fonction pour passer au slide suivant
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % values.length);
  };

  // Fonction pour passer au slide précédent
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + values.length) % values.length);
  };

  // Défilement automatique du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change de slide toutes les 5 secondes

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section id="values" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
        <div className="carousel-container relative overflow-hidden">
          <div
            className="carousel-track flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {values.map((value, index) => (
              <div key={index} className="carousel-slide w-full flex-shrink-0 p-4">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center h-[400px] flex flex-col items-center justify-center">
                    <FontAwesomeIcon icon={value.icon} className="text-5xl text-blue-600 mb-6" />
                    <h3 className="text-2xl font-bold">{value.title}</h3>
                    <p className="mt-4 text-gray-700">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contrôles du Carrousel */}
          <button
            onClick={prevSlide}
            className="carousel-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="carousel-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionValues;