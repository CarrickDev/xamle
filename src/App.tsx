import React from "react";
import {
  ArrowUpRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import "@fontsource/inter";
import accueilImage from "./images/accueil.png";
import logo from "./images/logo_blanc.png";
import logo_noir from "./images/logo_noir.png";
import robotImage from "./images/robot.png";
import dataImage from "./images/data.png";
import designImage from "./images/design.png";
import productImage from "./images/product.png";
import pubImage from "./images/pub.png";
import systalink from "./images/systalink-logo.png";
import fpt from "./images/3fpt-logo.png";
import ppe from "./images/ppe-logo.png";
import polaris from "./images/polaris-asso-logo.png";
import tidianeDia from "./images/tidiane-dia.png";
import moustaphaMbaye from "./images/moustapha-mbaye.png";
import aramataBadji from "./images/aramata-badji.png";
import moustaphaGueye from "./images/moustapha-gueye.png";
import cheikhTidianeKa from "./images/cheikh-tidiane-ka.png";
import ndeyeFatouDeme from "./images/ndeye-fatou-deme.png";
import logoX from "./images/logo-x.png";

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
          <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between pt-8">
            <div className="flex items-center gap-16 pl-12">
              <img src={logo} alt="Xamle Logo" className="h-12 sm:h-12" />
              <div className="flex items-center gap-16">
                <a
                  href="#about"
                  className="text-white hover:text-gray-200 transition-colors text-lg font-medium"
                >
                  À propos
                </a>
                <a
                  href="#expertises"
                  className="text-white hover:text-gray-200 transition-colors text-lg font-medium"
                >
                  Nos expertises
                </a>
                <a
                  href="#projets"
                  className="text-white hover:text-gray-200 transition-colors text-lg font-medium"
                >
                  Nos projets
                </a>
                <a
                  href="#equipe"
                  className="text-white hover:text-gray-200 transition-colors text-lg font-medium"
                >
                  Equipe
                </a>
              </div>
            </div>
            <a
              href="mailto:contact@xamle.io"
              className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Nous contacter
            </a>
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
                  className="w-full rounded-2xl"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4">
                  On fait aussi de
                  <br />
                  la PUB deh{" "}
                  <span role="img" aria-label="cool" className="text-4xl">
                    😎
                  </span>
                </h2>
                <p className="text-3xl mb-12">...en 360°</p>

                <p className="text-gray-700 text-lg">
                  De la direction artistique au copywriting,
                  <br />
                  en passant par le digital et la production...
                  <br />
                  nos équipes sont des AS des
                  <br />
                  campagnes créatives.
                </p>
              </div>

              {/* Services Cards - Using grid for better control */}
              <div className="grid grid-cols-1 gap-4 w-full max-w-xl">
                {/* Digital Card */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-2xl font-bold mb-2">DIGITAL</h3>
                  <p className="text-gray-700">
                    Parce qu'aujourd'hui,
                    <br />
                    être visible ne suffit plus :
                    <br />
                    il faut être remarquable.
                  </p>
                </div>

                {/* Branding Card - Shifted right */}
                <div className="bg-[#FFB74A] text-white rounded-2xl p-6 shadow-sm translate-x-20 -my-4">
                  <h3 className="text-2xl font-bold mb-2">BRANDING</h3>
                  <p>
                    Parce qu'une marque forte,
                    <br />
                    c'est une identité qui colle,
                    <br />
                    qui claque, qui dure.
                  </p>
                </div>

                {/* Copywriting Card */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-2xl font-bold mb-2">COPYWRITING</h3>
                  <p className="text-gray-700">
                    Parce que ce n'est pas
                    <br />
                    ce que vous dites qui compte,
                    <br />
                    mais comment vous le dites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-[#F8F8F8] py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-20">
            <h2 className="text-2xl font-bold text-[#202020]">
              Ils nous font
              <br />
              confiance !!!
            </h2>
            <div className="flex items-center gap-16">
              <img
                src={systalink}
                alt="Systalink"
                className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={fpt}
                alt="3FPT"
                className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={ppe}
                alt="PPE"
                className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={polaris}
                alt="Polaris Asso"
                className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#202020]">LA TEAM</h2>
            <p className="text-xl text-gray-600 mt-2">We are Xamle</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Row 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 w-full aspect-square">
                <img
                  src={tidianeDia}
                  alt="Tidiane Dia"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#202020]">TIDIANE DIA</h3>
              <p className="text-gray-600">CEO</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 w-full aspect-square">
                <img
                  src={moustaphaMbaye}
                  alt="Moustapha Mbaye"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#202020]">
                MOUSTAPHA MBAYE
              </h3>
              <p className="text-gray-600">CREATIVE DIRECTOR</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 w-full aspect-square">
                <img
                  src={aramataBadji}
                  alt="Aramata Badji"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#202020]">
                ARAMATA BADJI
              </h3>
              <p className="text-gray-600">CHIEF PRODUCT OFFICER</p>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 w-full aspect-square">
                <img
                  src={moustaphaGueye}
                  alt="Moustapha Gueye"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#202020]">
                MOUSTAPHA GUEYE
              </h3>
              <p className="text-gray-600">CHIEF DIGITAL OFFICER</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 w-full aspect-square">
                <img
                  src={cheikhTidianeKa}
                  alt="Cheikh Tidiane Ka"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#202020]">
                CHEIKH TIDIANE KA
              </h3>
              <p className="text-gray-600">CHIEF TECHNICAL OFFICER</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 w-full aspect-square">
                <img
                  src={ndeyeFatouDeme}
                  alt="Ndeye Fatou Deme"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#202020]">
                NDEYE FATOU DEME
              </h3>
              <p className="text-gray-600">DEV FULL STACK</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-start">
            {/* Left side */}
            <div className="flex items-start gap-32">
              {/* Logo and CTA */}
              <div className="flex flex-col gap-2">
                <img src={logoX} alt="Xamle" className="w-8 h-8" />
                <div className="flex items-center gap-4">
                  <p className="text-white">
                    Tu veux traduire ton idée en projet ?
                  </p>
                  <a
                    href="mailto:contact@xamle.io"
                    className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors text-sm"
                  >
                    Nous contacter
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-bold">
                  S'inscrire à<br />
                  notre newsletter
                </h3>
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    placeholder="Adresse Email"
                    className="bg-transparent border-b border-white text-white placeholder-gray-400 pb-2 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://facebook.com/xamle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com/xamle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com/xamle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com/company/xamle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 text-sm text-gray-400">
            © 2025 XamleGroup. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
