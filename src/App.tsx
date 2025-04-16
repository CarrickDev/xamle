import React from "react";
import { Code2, Database, Palette, Rocket, BrainCircuit } from "lucide-react";
import "@fontsource/inter";
import accueilImage from "./images/accueil.png";

const services = [
  {
    hashtag: "#Dev_web&mobile",
    description:
      "Du code de sortie: Sites web et apps mobiles performants, sur-mesure, et évolutifs.",
    icon: <Code2 className="w-8 h-8" />,
    bgColor: "bg-orange-100",
  },
  {
    hashtag: "#Data&Tech",
    description:
      "Tech it real ! Comment ça marche ? On connecte les points pour vous.",
    icon: <Database className="w-8 h-8" />,
    bgColor: "bg-blue-100",
  },
  {
    hashtag: "#Product_design",
    description:
      "Des interfaces qui décoiffent ! On dessine avec passion et on code ce qu'on dessine !",
    icon: <Palette className="w-8 h-8" />,
    bgColor: "bg-pink-100",
  },
  {
    hashtag: "#Product_management",
    description: "Un bon produit, c'est 80% de la réussite. On s'en occupe !",
    icon: <BrainCircuit className="w-8 h-8" />,
    bgColor: "bg-purple-100",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={accueilImage}
            alt="Woman with VR headset"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative h-full">
          <nav className="container mx-auto px-6 py-6">
            <div className="text-white text-2xl font-bold">Xamle</div>
          </nav>

          <div className="container mx-auto px-6 h-full flex flex-col justify-between">
            <div className="pt-20">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Façonnons vos
                <br />
                succès ensemble !
              </h1>
            </div>

            <div className="pb-40">
              <a
                href="mailto:contact@xamle.io?subject=Demande de devis&body=Bonjour,%0D%0A%0D%0AJe souhaite obtenir un devis pour mon projet.%0D%0A%0D%0AMerci de me recontacter pour en discuter.%0D%0A%0D%0ACordialement,"
                className="inline-flex bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors items-center gap-2"
              >
                Je veux un devis <Rocket className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">We are Xamle</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Votre partenaire privilégié de CO-création qui transforme dans
            chaque étape de votre processus de transformation digital.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${service.bgColor} rounded-3xl p-8 transition-transform hover:-translate-y-1`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">
                  {service.hashtag}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
