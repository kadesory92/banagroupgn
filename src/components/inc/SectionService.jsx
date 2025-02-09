import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faCogs,
  faHardHat,
  faChartLine,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const SectionService = () => {
  // Données des services
  const services = [
    {
      icon: faLaptopCode,
      title: "Technologie",
      description: "Nous offrons des solutions technologiques de pointe pour répondre à vos besoins.",
      link: "/services/technologie",
    },
    {
      icon: faCogs,
      title: "Ingénierie",
      description: "Nos services d'ingénierie couvrent un large éventail de disciplines.",
      link: "/services/ingenierie",
    },
    {
      icon: faHardHat,
      title: "Construction",
      description: "Nous réalisons des projets de construction innovants et durables.",
      link: "/services/construction",
    },
    {
      icon: faChartLine,
      title: "Consulting",
      description: "Nos experts vous accompagnent dans vos projets stratégiques.",
      link: "/services/consulting",
    },
    {
      icon: faShieldAlt,
      title: "Sécurité",
      description: "Nous fournissons des solutions de sécurité sur mesure pour protéger vos actifs.",
      link: "/services/securite",
    },
  ];

  // Fonction pour gérer le clic sur un service
  const handleServiceClick = (link) => {
    window.location.href = link; // Redirige vers la page du service
  };

  return (
    <section id="services" className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => handleServiceClick(service.link)}
            >
              <FontAwesomeIcon icon={service.icon} className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionService;