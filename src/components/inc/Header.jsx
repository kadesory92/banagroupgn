import React, { useState, useEffect } from "react";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Pour gérer l'index du slide actuel
  const [currentText, setCurrentText] = useState(0); // Pour gérer l'index du texte défilant

  // Données pour le slider
  const slides = [
    { image: "./images/headers/header1.jpg", alt: "Slide 1" },
    { image: "./images/headers/header2.jpg", alt: "Slide 2" },
    { image: "./images/headers/header3.jpg", alt: "Slide 3" },
  ];

  // Données pour le texte défilant
  const textSlides = [
    "Innovation, Technologie, et Excellence",
    "Des solutions sur mesure pour votre entreprise",
    "Engagés pour un avenir durable",
    "Votre partenaire de confiance",
  ];

  // Fonction pour passer au slide suivant
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Fonction pour passer au slide précédent
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Fonction pour faire défiler le texte
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textSlides.length);
    }, 3000); // Change le texte toutes les 3 secondes

    return () => clearInterval(textInterval);
  }, [textSlides.length]);

  // Fonction pour faire défiler les images automatiquement
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change le slide toutes les 5 secondes

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Slider */}
      <div className="slider-container absolute inset-0 w-full">
        <div
          className="slider-track flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slider-slide w-full h-screen flex-shrink-0">
              <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Contenu du Header avec texte défilant */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 w-full max-w-4xl mx-auto bg-blue bg-opacity-50 backdrop-blur-sm py-8 rounded-lg">
          <h1 className="text-5xl font-bold font-great-vibes">BANA-GROUP</h1>
          <strong>
            <h4 className="relative inline-block">
              <span className="absolute top-0 left-0 w-full h-0.5 bg-blue-600"></span>
              Base d'Accès aux Numériques Avancées
            </h4>
          </strong>

          {/* Conteneur pour le texte défilant horizontal */}
          <div className="mt-4 text-xl h-12 overflow-hidden relative w-full">
            <div
              className="absolute w-full flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentText * 100}%)` }}
            >
              {textSlides.map((text, index) => (
                <p key={index} className="text-slide flex-shrink-0 w-full text-center">
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Boutons */}
          <a
            href="#about"
            className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 mx-3"
          >
            En savoir plus
          </a>
          <a
            href="#contact"
            className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Contactez Nous
          </a>
        </div>
      </div>

      {/* Contrôles du Slider */}
      <button
        onClick={prevSlide}
        className="slider-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="slider-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
      >
        &#10095;
      </button>
    </header>
  );
};

export default Header;