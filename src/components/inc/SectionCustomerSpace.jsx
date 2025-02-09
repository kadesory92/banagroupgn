import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const SectionCustomerSpace = () => {
  return (
    <section id="client-portal" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Espace Client</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <p className="text-gray-700">
            Connectez-vous à votre espace client pour suivre vos projets, accéder à des documents et communiquer avec notre
            équipe.
          </p>
          <a
            href="#login"
            className="mt-4 inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            Connexion
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionCustomerSpace;