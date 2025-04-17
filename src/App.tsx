import React from "react";
import { ArrowUpRight } from "lucide-react";
import "@fontsource/inter";
import accueilImage from "./images/accueil.png";
import logo from "./images/logo_blanc.png";
import logo_noir from "./images/logo_noir.png";
import robotImage from "./images/robot.png";
import dataImage from "./images/data.png";
import designImage from "./images/design.png";
import productImage from "./images/product.png";
import pubImage from "./images/pub.png";
import pub2Image from "./images/pub2.png";

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
          <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
            <img src={logo} alt="Xamle Logo" className="h-8 sm:h-12" />
          </nav>

          <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col justify-between">
            <div className="pt-12 sm:pt-20">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 flex flex-col items-start gap-2 sm:gap-4">
                <div className="px-8 sm:px-20">Façonnons</div>
                <div className="px-8 sm:px-40">
                  <span className="bg-[#EFD9B4]/60 text-[#6A1B9A] px-2 py-0 rounded-lg inline-block">
                    vos succès
                  </span>
                </div>
                <div className="px-16 sm:px-64">ensemble !</div>
              </h1>
            </div>

            <div className="pb-20 sm:pb-40 px-4 sm:px-6">
              <a
                href="mailto:contact@xamle.io?subject=Demande de devis&body=Bonjour,%0D%0A%0D%0AJe souhaite obtenir un devis pour mon projet.%0D%0A%0D%0AMerci de me recontacter pour en discuter.%0D%0A%0D%0ACordialement,"
                className="inline-flex bg-[#EFD9B4] text-[#4A90E2] px-4 py-2 rounded-[12px] font-semibold hover:bg-opacity-90 transition-colors items-center gap-2 w-[200px] sm:w-[240px] h-[40px] sm:h-[50px] justify-center text-sm sm:text-base"
              >
                Je veux un devis{" "}
                <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-[#4A90E2] text-4xl font-normal mb-2">We are</h2>
          <div className="flex flex-col">
            <div className="flex items-center">
              <img
                src={logo_noir}
                alt="Xamle"
                className="h-16 object-contain"
              />
              <div className="w-[2px] h-16 bg-[#202020] mx-8 self-center"></div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Votre partenaire partenaire de CO-création
                <br />
                qui intervient dans chaque étape de votre
                <br />
                processus de transformation digitale.
              </p>
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-12 gap-8 mt-20">
              {/* Dev Web & Mobile Card */}
              <div className="col-span-5 bg-white rounded-3xl p-8">
                <div className="relative">
                  <img
                    src={robotImage}
                    alt="Robot illustration"
                    className="w-full h-[500px] object-cover rounded-2xl"
                  />
                  <h3 className="absolute top-8 left-8 text-[#4A90E2] text-2xl font-bold">
                    #Dev_web&mobile
                  </h3>
                </div>
              </div>

              {/* Data & Tech Column */}
              <div className="col-span-3 flex flex-col gap-1">
                <div className="rounded-3xl p-8 flex-1">
                  <div className="relative">
                    <img
                      src={dataImage}
                      alt="Data visualization"
                      className="w-full h-[220px] object-cover rounded-2xl"
                    />
                    <h3 className="absolute top-8 left-8 text-white text-2xl font-bold">
                      #Data&Tech
                    </h3>
                  </div>
                </div>
                <div className="rounded-3xl p-8 flex-1">
                  <div className="relative">
                    <img
                      src={productImage}
                      alt="Product management"
                      className="w-full h-[220px] object-cover rounded-2xl"
                    />
                    <h4 className="absolute top-8 left-8 text-white text-xl font-bold">
                      Product#
                      <br />
                      management
                    </h4>
                  </div>
                </div>
              </div>

              {/* Product Design Card */}
              <div className="col-span-4 rounded-3xl p-8">
                <div className="relative">
                  <img
                    src={designImage}
                    alt="Product design illustration"
                    className="w-full h-[500px] object-cover rounded-2xl"
                  />
                  <h3 className="absolute top-8 left-8 text-white text-2xl font-bold">
                    #Product
                    <br />
                    Design
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-8">
            {/* Dev web & mobile */}
            <div className="bg-[#EFD9B4] rounded-3xl p-12">
              <h3 className="text-black text-3xl font-bold mb-8">
                #Dev_web&mobile
              </h3>
              <div className="text-black text-xl text-center">
                <p className="mb-4">Du code, du solide.</p>
                <p className="mb-4">Sites web et apps mobiles</p>
                <p className="mb-4">performants, sur-mesure,</p>
                <p>et scalables.</p>
              </div>
            </div>

            {/* Data & Tech */}
            <div className="bg-[#4A90E2] rounded-3xl p-12">
              <h3 className="text-white text-3xl font-bold mb-8">#Data&Tech</h3>
              <div className="text-white text-xl text-center">
                <p className="mb-4">Tech à l'os !</p>
                <p className="mb-4">Données à cœur.</p>
                <p>
                  On connecte les points
                  <br />
                  pour vous.
                </p>
              </div>
            </div>

            {/* Product design */}
            <div className="bg-[#FFE4E6] rounded-3xl p-12">
              <h3 className="text-black text-3xl font-bold mb-8">
                #Product_design
              </h3>
              <div className="text-black text-xl text-center">
                <p className="mb-4">Des interfaces</p>
                <p className="mb-4">qui donnent envie</p>
                <p className="mb-4">de cliquer.</p>
                <p>Mais surtout de rester !</p>
              </div>
            </div>

            {/* Product management */}
            <div className="bg-[#FFCCD5] rounded-3xl p-12">
              <h3 className="text-black text-3xl font-bold mb-8">
                #Product_management
              </h3>
              <div className="text-black text-xl text-center">
                <p className="mb-4">Un bon produit,</p>
                <p className="mb-4">c'est 20 % d'idée</p>
                <p className="mb-4">et 80 % de méthode.</p>
                <p>On a les deux !</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advertising Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-20">
            {/* Left side - Image */}
            <div className="flex-1">
              <div className="bg-gradient-to-br from-[#FF6B4A] to-[#FFB74A] rounded-3xl p-8">
                <img
                  src={pubImage}
                  alt="Illustration publicitaire"
                  className="w-[539px] h-[1058px] rounded-2xl"
                />
              </div>
            </div>

            {/* Right side - Text */}
            <div className="flex-1 -mt-[56rem]">
              <h2 className="text-4xl font-bold mb-6 flex items-center gap-1">
                On fait aussi de
                <br />
                la PUB deh <span className="text-4xl">😎</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                De la direction artistique au copywriting,
                <br />
                nos équipes sont des AS des campagnes
                <br />
                créatives.
              </p>
            </div>
          </div>

          {/* Second Image Container */}
          <div className="-mt-[52rem] flex justify-end pr-32">
            <div className="w-1/3 rounded-3xl overflow-hidden border border-gray-100">
              <img
                src={pub2Image}
                alt="Publicité secondaire"
                className="w-[600px] h-[743px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
