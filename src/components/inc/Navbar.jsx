import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Pour gérer l'état du menu mobile

  return (
    <nav className="bg-blue-900 text-white p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/logo.jpg" class="w-[50px] h-[50px] rounded-full" alt="Logo" />
        {/* Logo à gauche */}
        <a href="#" className="text-2xl font-bold font-great-vibes">
          BANA-GROUP
        </a>

        {/* Liens centrés (pour les écrans larges) */}
        <div className="hidden md:flex space-x-8 mx-auto">
          {/* Première ligne de liens */}
          <ul className="flex space-x-8">
            <li>
              <a
                href="#home"
                className="text-lg font-semibold hover:text-blue-300 transition duration-300 transform hover:scale-105"
              >
                Accueil
              </a>
            </li>
            <li className="relative group">
              <a
                href="#about"
                className="text-lg font-semibold hover:text-blue-300 transition duration-300 transform hover:scale-105"
              >
                À Propos
              </a>
              <ul className="hidden group-hover:block absolute left-0 mt-2 bg-white text-blue-900 p-2 rounded shadow-lg">
                <li>
                  <a
                    href="#history"
                    className="block px-4 py-2 hover:text-blue-300"
                  >
                    Notre Histoire
                  </a>
                </li>
                <li>
                  <a href="#team" className="block px-4 py-2 hover:text-blue-300">
                    Notre Équipe
                  </a>
                </li>
                <li>
                  <a
                    href="#values"
                    className="block px-4 py-2 hover:text-blue-300"
                  >
                    Nos Valeurs
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a
                href="#services"
                className="text-lg font-semibold hover:text-blue-300 transition duration-300 transform hover:scale-105"
              >
                Services
              </a>
              <ul className="hidden group-hover:block absolute left-0 mt-2 bg-white text-blue-900 p-2 rounded shadow-lg">
                <li>
                  <a
                    href="#technology"
                    className="block px-4 py-2 hover:text-blue-300"
                  >
                    Technologie
                  </a>
                </li>
                <li>
                  <a
                    href="#engineering"
                    className="block px-4 py-2 hover:text-blue-300"
                  >
                    Ingénierie
                  </a>
                </li>
                <li>
                  <a
                    href="#construction"
                    className="block px-4 py-2 hover:text-blue-300"
                  >
                    Construction
                  </a>
                </li>
                <li>
                  <a
                    href="#consulting"
                    className="block px-4 py-2 hover:text-blue-300"
                  >
                    Consulting
                  </a>
                </li>
                <li>
                  <a
                    href="#security"
                    className="block px-4 py-2 hover:text-blue-300"
                  >
                    Sécurité
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-lg font-semibold hover:text-blue-300 transition duration-300 transform hover:scale-105"
              >
                Projets
              </a>
            </li>
          </ul>

          {/* Deuxième ligne de liens */}
          <ul className="flex space-x-8">
            <li>
              <a
                href="#rd"
                className="text-lg font-semibold hover:text-blue-300 transition duration-300 transform hover:scale-105"
              >
                R&D
              </a>
            </li>
            <li className="relative group">
              <a
                href="#resources"
                className="text-lg font-semibold hover:text-blue-300 transition duration-300 transform hover:scale-105"
              >
                Ressources
              </a>
              <ul className="hidden group-hover:block absolute left-0 mt-2 bg-white text-blue-900 p-2 rounded shadow-lg">
                <li>
                  <a href="#news" className="block px-4 py-2 hover:text-blue-300">
                    Actualités
                  </a>
                </li>
                <li>
                  <a
                    href="#downloads"
                    className="block px-4 py-2 hover:text-blue-300"
                  >
                    Téléchargements
                  </a>
                </li>
                <li>
                  <a href="#faq" className="block px-4 py-2 hover:text-blue-300">
                    FAQ
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a
                href="#community"
                className="text-lg font-semibold hover:text-blue-300 transition duration-300 transform hover:scale-105"
              >
                Communauté
              </a>
              <ul className="hidden group-hover:block absolute left-0 mt-2 bg-white text-blue-900 p-2 rounded shadow-lg">
                <li>
                  <a
                    href="#partnerships"
                    className="block px-4 py-2 hover:text-blue-300"
                  >
                    Partenariats
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    className="block px-4 py-2 hover:text-blue-300"
                  >
                    Événements
                  </a>
                </li>
                <li>
                  <a
                    href="#client-portal"
                    className="block px-4 py-2 hover:text-blue-300"
                  >
                    Espace Client
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Liens Connexion et Inscription à droite (pour les écrans larges) */}
        <div className="hidden md:flex space-x-4">
          <a
            href="#login"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Connexion
          </a>
          <a
            href="#signup"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Inscription
          </a>
        </div>

        {/* Menu Hamburger pour mobile */}
        {/* <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button> */}
        <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
        </button>
      </div>

      {/* Menu mobile (caché par défaut) */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#home"
                className="block text-lg font-semibold hover:text-blue-300 transition duration-300"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-lg font-semibold hover:text-blue-300 transition duration-300"
              >
                À Propos
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-lg font-semibold hover:text-blue-300 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="block text-lg font-semibold hover:text-blue-300 transition duration-300"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#rd"
                className="block text-lg font-semibold hover:text-blue-300 transition duration-300"
              >
                R&D
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="block text-lg font-semibold hover:text-blue-300 transition duration-300"
              >
                Ressources
              </a>
            </li>
            <li>
              <a
                href="#community"
                className="block text-lg font-semibold hover:text-blue-300 transition duration-300"
              >
                Communauté
              </a>
            </li>
            <li>
              <a
                href="#careers"
                className="block text-lg font-semibold hover:text-blue-300 transition duration-300"
              >
                Carrières
              </a>
            </li>
            <li>
              <a
                href="#login"
                className="block text-lg font-semibold hover:text-blue-300 transition duration-300"
              >
                Connexion
              </a>
            </li>
            <li>
              <a
                href="#signup"
                className="block text-lg font-semibold hover:text-blue-300 transition duration-300"
              >
                Inscription
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;