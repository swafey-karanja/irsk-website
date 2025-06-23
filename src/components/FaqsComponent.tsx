"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const faqs: FAQ[] = [
    {
      id: "1",
      question: "How do I apply for government services online?",
      answer:
        "You can apply for most government services through our online portal. Simply create an account, verify your identity using your national ID, and follow the step-by-step application process.",
    },
    {
      id: "2",
      question: "What documents do I need for service applications?",
      answer:
        "Required documents typically include: valid national ID or passport, proof of residence, relevant certificates or permits, and any service-specific documentation.",
    },
    {
      id: "3",
      question: "What are your office hours and locations?",
      answer:
        "Our main offices operate Monday to Friday, 8:00 AM to 5:00 PM. We have regional offices in all major cities. You can find specific locations and contact details on our locations page.",
    },
    {
      id: "4",
      question: "How can I contact customer support?",
      answer:
        "We offer multiple support channels: 24/7 online chat, email support, phone support during business hours, and in-person assistance at any of our service centers.",
    },
    {
      id: "5",
      question: "How do I track my application status?",
      answer:
        'Log into your account on our online portal and visit the "My Applications" section. You\'ll see real-time status updates and receive SMS and email notifications.',
    },
    {
      id: "6",
      question: "Is my personal data secure with your services?",
      answer:
        "Yes, we employ bank-level security measures including end-to-end encryption and secure data centers. We comply with all national data protection laws and your data is never shared without consent.",
    },
  ];

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600/90 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/20 transition-colors duration-200 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {activeAccordion === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeAccordion === faq.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-900 text-md leading-tight mt-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you with any additional
              inquiries.
            </p>
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
