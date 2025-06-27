import React from "react";
import Speakers from "./Speakers";
import SectionHeader from "./SectionHeader";

interface StatisticProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Statistic: React.FC<StatisticProps> = ({ number, label, icon }) => (
  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:shadow-lg transition-all duration-300">
    <div className="text-blue-600 mb-3 flex justify-center">{icon}</div>
    <div className="text-3xl font-bold text-slate-800 mb-2">{number}</div>
    <div className="text-slate-600 font-medium">{label}</div>
  </div>
);

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => (
  <div className="group bg-white/60 backdrop-blur-md rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/20">
    <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors">
      {title}
    </h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const AboutPage: React.FC = () => {
  const statistics = [
    {
      number: "15+",
      label: "Years of Service",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: "500K+",
      label: "Citizens Served",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      number: "24/7",
      label: "Service Delivery",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
    },
    {
      number: "98%",
      label: "Satisfaction Rate",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty, transparency, and ethical conduct in all our operations and interactions with the public.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Neutrality",
      description:
        "We strive for a policy neutral, non-partisan approach to our operations.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    },
    {
      title: "Inclusiveness",
      description:
        "We make sure to foster and promote broad and diverse membership.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0-4h6m-6 0a2 2 0 100 4m6-4V9a2 2 0 00-2-2H9m8 0V7a2 2 0 00-2-2H9a2 2 0 00-2 2v2m8 0v2a2 2 0 002 2h2a2 2 0 002-2V9a2 2 0 00-2-2h-2z"
          />
        </svg>
      ),
    },
    {
      title: "Professionalism",
      description:
        "We strive to promote professional excellence and competence.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <SectionHeader title="About IRSK" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="prose prose-lg text-slate-600 space-y-6 text-left">
                  <p className="leading-relaxed">
                    The International Relations Society of Kenya (IRSK) serves
                    as a forum for exchanging ideas, networking and programmatic
                    initiatives among those involved in the study, teaching and
                    practice of international relations and diplomacy. In
                    fulfilling our primary role as the hub for international
                    relations and diplomacy professionals, we work to promote
                    interest in the field, develop expertise and understanding
                    of global issues, connect the IRSK community, and support
                    our membership in fulfilling their ambitions. To this end,
                    the Society is committed to nurturing new generations of
                    global-minded leaders and supporting initiatives geared
                    towards making the world a more peaceful, safe and
                    prosperous place.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        5
                      </div>
                      <div className="text-sm text-slate-600">
                        Specialized Divisions
                      </div>
                    </div>
                    <div className="text-center p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        200+
                      </div>
                      <div className="text-sm text-slate-600">
                        Trained Personnel
                      </div>
                    </div>
                    <div className="text-center p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        12
                      </div>
                      <div className="text-sm text-slate-600">
                        Service Locations
                      </div>
                    </div>
                    <div className="text-center p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        ISO
                      </div>
                      <div className="text-sm text-slate-600">
                        Certified Operations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {statistics.map((stat, index) => (
              <Statistic key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-blue-600/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Our Mission
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-md">
                IRSK&apos;s mission is to serve as a policy-neutral platform
                through which a community of international relations and
                diplomacy practitioners, experts and scholars will be actively
                involved in continuous learning, engagement and knowledge
                sharing.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Our Vision
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-md">
                A vibrant professional body that is a trusted interlocutor on
                international relations and diplomacy issues in Kenya and
                beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionHeader title="Our Core Values" />
            <p className="text-md text-slate-600 max-w-3xl mx-auto">
              These fundamental principles guide our actions, decisions, and
              commitment to serving our community with distinction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-blue-600/30">
        <Speakers
          sectionTitle="Meet Our Comittee"
          buttonLabel="See Full Comittee"
        />
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader title="Ready to Learn More?" />
          <p className="text-md text-slate-600 mb-8">
            Connect with IRSK to discover how we can serve your community needs
            or explore career opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
              Contact Us
            </button>
            <button className="px-8 py-4 bg-white/70 backdrop-blur-sm hover:bg-white/90 text-slate-800 font-semibold rounded-full border border-white/20 transition-all duration-300 hover:shadow-lg">
              Join Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
