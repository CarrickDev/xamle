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
          <nav className="container mx-auto px-4 md:px-6 py-4 md:py-6">
            <img src={logo} alt="Xamle Logo" className="h-8 md:h-12" />
          </nav>

          <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-between">
            <div className="pt-8 md:pt-20">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white flex flex-col items-start gap-4">
                <div className="px-4 md:px-20">Façonnons</div>
                <div className="px-8 md:px-40">
                  <span className="bg-[#EFD9B4]/60 text-[#6A1B9A] px-2 py-1 rounded-lg">
                    vos succès
                  </span>
                </div>
                <div className="px-12 md:px-64">ensemble !</div>
              </h1>
            </div>

            <div className="pb-10 md:pb-40">
              <a
                href="mailto:contact@xamle.io"
                className="inline-flex bg-[#EFD9B4] text-[#4A90E2] px-4 py-2 rounded-xl font-semibold hover:bg-opacity-90 transition-colors items-center gap-2 text-sm md:text-base"
              >
                Je veux un devis{" "}
                <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-[#4A90E2] text-3xl md:text-4xl font-normal mb-6">
            We are
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
            <img
              src={logo_noir}
              alt="Xamle"
              className="h-12 md:h-16 object-contain"
            />
            <div className="hidden md:block w-[2px] h-16 bg-[#202020] mx-8 self-center"></div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Votre partenaire partenaire de CO-création
              <br />
              qui intervient dans chaque étape de votre
              <br />
              processus de transformation digitale.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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

      {/* Advertising Section */}
      <div className="py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-20">
            {/* Left side - Image */}
            <div className="w-full md:w-2/3">
              <div className="bg-gradient-to-br from-[#FF6B4A] to-[#FFB74A] rounded-3xl p-4 md:p-8">
                <img
                  src={pubImage}
                  alt="Illustration publicitaire"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>

            {/* Right side - Text */}
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                On fait aussi de
                <br />
                la PUB deh <span>😎</span>
              </h2>
              <p className="text-base md:text-xl text-gray-700 leading-relaxed">
                De la direction artistique au copywriting,
                <br />
                nos équipes sont des AS des campagnes
                <br />
                créatives.
              </p>
            </div>
          </div>

          {/* Second Image Container */}
          <div className="mt-8 md:-mt-[23rem] flex justify-center md:justify-end">
            <div className="w-full md:w-1/3">
              <img
                src={pub2Image}
                alt="Publicité secondaire"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            {/* Left side */}
            <div className="flex flex-col gap-6">
              <h2 className="text-xl md:text-2xl font-semibold">Site name</h2>
              <div className="flex gap-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-20">
              {/* First Column */}
              <div>
                <h3 className="font-semibold mb-6">Topic</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Page
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Page
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Page
                    </a>
                  </li>
                </ul>
              </div>

              {/* Second Column */}
              <div>
                <h3 className="font-semibold mb-6">Topic</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Page
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Page
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Page
                    </a>
                  </li>
                </ul>
              </div>

              {/* Third Column */}
              <div>
                <h3 className="font-semibold mb-6">Topic</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Page
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Page
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Page
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
