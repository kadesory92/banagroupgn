import React from "react";

const SectionPortfolio = () => {
  // Données des projets
  const projects = [
    {
      image: "./images/image1.jpeg",
      alt: "Projet 1",
      title: "Projet Technologique",
      description: "Description du projet technologique réalisé par BANA-GROUP.",
    },
    {
      image: "./images/image1.jpeg",
      alt: "Projet 2",
      title: "Projet d'Ingénierie",
      description: "Description du projet d'ingénierie réalisé par BANA-GROUP.",
    },
    {
      image: "./images/image1.jpeg",
      alt: "Projet 3",
      title: "Projet de Construction",
      description: "Description du projet de construction réalisé par BANA-GROUP.",
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item bg-gray-200 p-4 rounded-lg">
              <img src={project.image} alt={project.alt} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionPortfolio;