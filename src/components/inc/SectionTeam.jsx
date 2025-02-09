import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import '../../assets/styles/sectionTeamStyle.css';
// import IMAGE1 from '../../../public/images/bana.jpg';

const SectionTeam = () => {
  const teamMembers = [
    {
      name: "Sory Kourouma",
      role: "CEO & Fondateur",
      image: "./images/bana.jpg",
      description: "MR Kourouma est un visionnaire avec quelques années d'expérience dans l'industrie technologique.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Mohamed Morcire Kallo",
      role: "Directeur Technique",
      image: "./images/myphoto.jpg",
      description: "MR Kallo est un expert en ingénierie logicielle et en gestion de projets complexes.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Ismael Barry",
      role: "Responsable Marketing et Relationnel",
      image: "./images/barry.jpg",
      description: "MR Barry est un stratège marketing avec une passion pour les technologies innovantes.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    // {
    //   name: "Alex Johnson",
    //   role: "Responsable Marketing",
    //   image: "./images/team/alex-johnson.jpg",
    //   description: "Alex est un stratège marketing avec une passion pour les technologies innovantes.",
    //   social: {
    //     linkedin: "https://linkedin.com",
    //     twitter: "https://twitter.com",
    //   },
    // },
  ];

  return (
    <section id="team" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Notre Équipe</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Rencontrez les esprits brillants qui font de BANA-GROUP un leader dans l'industrie.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" style={{widh: 50, height: 500, marginTop: 10}}/>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2"><em>{member.name}</em></h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-700 mb-6">{member.description}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTeam;