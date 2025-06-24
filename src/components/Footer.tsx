import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900/85 via-blue-900/90 to-indigo-900/85 backdrop-blur-xl border-t border-white/10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          {/* Company Info Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 inline-block mb-6 border border-white/20">
              <Image
                className="w-auto h-9 invert"
                width={50}
                height={40}
                src="/logos/International-Relations-Society-of-Kenya-IRSK-Logo (1).webp"
                alt="IRSK Logo"
              />
            </div>

            <p className="text-sm leading-relaxed text-slate-200 mb-6">
              The International Relations Society of Kenya (IRSK) is a
              professional body for the international affairs and diplomacy
              field in Kenya that serves as a forum for the exchange of ideas,
              networking and programmatic initiatives.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-sm text-slate-300">
                <svg
                  className="w-4 h-4 mr-3 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Nairobi, Kenya
              </div>
              <div className="flex items-center text-sm text-slate-300">
                <svg
                  className="w-4 h-4 mr-3 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@irsk.go.ke
              </div>
              <div className="flex items-center text-sm text-slate-300">
                <svg
                  className="w-4 h-4 mr-3 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +254 (0) 20 123 4567
              </div>
            </div>

            {/* Social Media Links */}
            <ul className="flex items-center space-x-4">
              <li>
                <a
                  href="#"
                  title="Twitter"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-white/10 backdrop-blur-sm rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600 border border-white/20 hover:border-blue-600 hover:scale-110"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="Facebook"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-white/10 backdrop-blur-sm rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600 border border-white/20 hover:border-blue-600 hover:scale-110"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="Instagram"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-white/10 backdrop-blur-sm rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600 border border-white/20 hover:border-blue-600 hover:scale-110"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="LinkedIn"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-white/10 backdrop-blur-sm rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600 border border-white/20 hover:border-blue-600 hover:scale-110"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-blue-300 uppercase mb-6">
              Quick Links
            </p>

            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="flex text-sm text-slate-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400 hover:translate-x-1"
                >
                  <svg
                    className="w-4 h-4 mr-2 mt-0.5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  About IRSK
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-sm text-slate-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400 hover:translate-x-1"
                >
                  <svg
                    className="w-4 h-4 mr-2 mt-0.5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-sm text-slate-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400 hover:translate-x-1"
                >
                  <svg
                    className="w-4 h-4 mr-2 mt-0.5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-sm text-slate-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400 hover:translate-x-1"
                >
                  <svg
                    className="w-4 h-4 mr-2 mt-0.5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Membership
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-blue-300 uppercase mb-6">
              Resources
            </p>

            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="flex text-sm text-slate-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400 hover:translate-x-1"
                >
                  <svg
                    className="w-4 h-4 mr-2 mt-0.5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-sm text-slate-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400 hover:translate-x-1"
                >
                  <svg
                    className="w-4 h-4 mr-2 mt-0.5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Research Papers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-sm text-slate-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400 hover:translate-x-1"
                >
                  <svg
                    className="w-4 h-4 mr-2 mt-0.5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Policy Guidelines
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-sm text-slate-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400 hover:translate-x-1"
                >
                  <svg
                    className="w-4 h-4 mr-2 mt-0.5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Legal Framework
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-blue-300 uppercase mb-6">
              Stay Connected
            </p>

            <p className="text-sm text-slate-300 mb-6">
              Subscribe to our newsletter for the latest updates on
              international relations, policy developments, and upcoming events.
            </p>

            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="block w-full p-4 text-slate-800 placeholder-slate-500 transition-all duration-200 bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-6 py-4 font-semibold text-white transition-all duration-200 bg-orange-400 rounded-xl hover:bg-orange-500 focus:bg-orange-500 hover:shadow-lg hover:scale-105 backdrop-blur-sm"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Subscribe to Updates
              </button>
            </form>

            {/* Emergency Contact */}
            {/* <div className="mt-8 p-4 bg-red-600/20 backdrop-blur-sm rounded-xl border border-red-500/30">
              <div className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-red-400 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="text-sm font-semibold text-red-300">
                  Emergency Hotline
                </span>
              </div>
              <p className="text-red-200 text-sm">
                24/7 Support: <span className="font-bold">999</span>
              </p>
            </div> */}
          </div>
        </div>

        <hr className="mt-16 mb-8 border-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-slate-400">
            © Copyright 2025, All Rights Reserved by International Relations
            Society of Kenya (IRSK)
          </p>

          <div className="flex items-center space-x-6 text-sm">
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
