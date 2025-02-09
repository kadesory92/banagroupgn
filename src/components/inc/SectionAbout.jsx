import React from "react";

const SectionAbout = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">À Propos de Nous</h2>
        {/* <div className="grid place-items-center h-screen">
          <img src="/logo.jpg" style="width:200px; height:200px;" alt="Logo" />
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bloc Notre Histoire */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold mb-6">Notre Histoire</h3>
            <p className="text-gray-700">
              Fondé en 2005, BANA-GROUP est né de la vision de révolutionner l'industrie technologique en Afrique.
              Depuis nos débuts, nous nous sommes engagés à fournir des solutions innovantes et adaptées aux besoins
              locaux tout en répondant aux standards internationaux.
            </p>
            <p className="mt-4 text-gray-700">
              Notre parcours est marqué par des projets phares qui ont transformé des secteurs clés tels que
              l'énergie, les télécommunications et la finance. Nous croyons en une technologie inclusive et durable.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>2022 : Création de BANA-GROUP à Ijevsk, Russie, basée principalement en Guinée.</li>
              <li>2024 : Lancement de notre premier projet international.</li>
              <li>2027 : Expansion prévue dans 10 pays africains.</li>
            </ul>
          </div>

          {/* Bloc Notre Équipe */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-600">
            <h3 className="text-2xl font-bold mb-6">Notre Équipe</h3>
            <p className="text-gray-700">
              Notre équipe est composée de plus de 200 experts passionnés par l'innovation et la technologie.
              Nous croyons en la diversité des compétences et des perspectives pour offrir des solutions créatives
              et efficaces.
            </p>
            <p className="mt-4 text-gray-700">
              Chaque membre de notre équipe apporte une expertise unique, qu'il s'agisse d'ingénierie, de développement
              logiciel, de gestion de projet ou de stratégie d'entreprise.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>Ingénieurs certifiés avec plus de 10 ans d'expérience.</li>
              <li>Développeurs spécialisés dans les technologies émergentes.</li>
              <li>Consultants stratégiques pour les entreprises innovantes.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;