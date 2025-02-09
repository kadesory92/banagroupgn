import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4">À Propos de Nous</h3>
            <p className="text-gray-300">
              BANA-GROUP est une entreprise innovante spécialisée dans la technologie, l'ingénierie et la
              construction. Nous nous engageons à fournir des solutions de qualité pour répondre aux besoins de nos
              clients.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-blue-300">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-300">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-blue-300">
                  Projets
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Informations de contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contactez-Nous</h3>
            <ul className="text-gray-300 space-y-2">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                123 Rue de l'Innovation, Ville, Pays
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                +123 456 7890
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                contact@banagroup.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités et offres.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Saisissez Votre email"
                className="flex-1 p-2 rounded-l-lg text-white-900"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition duration-300"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <h3 className="text-xl font-bold mb-4">Suivez-Nous</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-blue-300">
              <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-300">
              <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-300">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-300">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Droits d'auteur */}
        <div className="mt-8 text-center text-gray-300">
          <p>&copy; 2023 BANA-GROUP. Tous droits réservés.</p>
          <div className="mt-2">
            <a href="#" className="mx-2 hover:text-blue-300">
              Politique de Confidentialité
            </a>
            <a href="#" className="mx-2 hover:text-blue-300">
              Conditions d'Utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;