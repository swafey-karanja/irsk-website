"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { DropdownMenu } from "./DropdownMenu";
import {
  eventsDropdown,
  mediaDropdown,
  programsMenu,
} from "@/assets/data/menuItems";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Membership", href: "/membership" },
    { label: "Publications", href: "/publications" },
  ];

  const socialLinks = [
    {
      icon: FaTwitter,
      href: "#",
      hoverColor: "hover:text-blue-400",
      label: "Twitter",
    },
    {
      icon: FaLinkedin,
      href: "#",
      hoverColor: "hover:text-blue-500",
      label: "LinkedIn",
    },
    {
      icon: FaYoutube,
      href: "#",
      hoverColor: "hover:text-red-500",
      label: "YouTube",
    },
    {
      icon: FaFacebook,
      href: "#",
      hoverColor: "hover:text-blue-300",
      label: "Facebook",
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="hidden lg:flex w-[98%] text-white min-h-[120px]"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo - Left side, full height */}
        <div className="flex items-center justify-center px-6 pt-12 h-full">
          <Link
            href="/"
            className="block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
          >
            <Image
              src="/logos/International-Relations-Society-of-Kenya-IRSK-Logo (1).webp"
              alt="International Relations Society of Kenya Logo"
              width={250}
              height={300}
              className="h-full w-auto object-contain max-h-[100px]"
              priority
              sizes="(max-width: 768px) 200px, 250px"
            />
          </Link>
        </div>

        {/* Main nav content */}
        <div className="flex-1 flex flex-col justify-end">
          {/* Bottom section with navigation and right actions */}
          <div className="flex items-center justify-between pb-2 border-b-2 border-white w-full">
            {/* Navigation links */}
            <ul
              className="flex gap-6 items-center text-[15px] py-2"
              role="menubar"
            >
              {navItems.map((item) => (
                <li key={item.label} role="none">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-xs font-semibold uppercase transition-all duration-200 text-white hover:underline hover:text-gray-200 focus:outline-none focus:underline focus:text-gray-200 py-1 px-1 rounded"
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="relative group" role="none">
                <DropdownMenu
                  label="Programs"
                  items={programsMenu}
                  isInSidebar={false}
                />
              </li>
              <li className="relative group" role="none">
                <DropdownMenu
                  label="Events"
                  items={eventsDropdown}
                  isInSidebar={false}
                />
              </li>
              <li className="relative group" role="none">
                <DropdownMenu
                  label="Media"
                  items={mediaDropdown}
                  isInSidebar={false}
                />
              </li>
            </ul>

            {/* Right actions - aligned with navigation */}
            <div className="flex items-center gap-6 xl:gap-10">
              {/* Social media links */}
              <div
                className="flex gap-3 xl:gap-4 text-xl"
                role="list"
                aria-label="Social media links"
              >
                {socialLinks.map(({ icon: Icon, href, hoverColor, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className={`transition-all duration-200 ${hoverColor} hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded p-1`}
                    aria-label={`Visit our ${label} page`}
                    role="listitem"
                  >
                    <Icon />
                  </Link>
                ))}
              </div>

              {/* Search button */}
              <button
                className="p-2 rounded-full bg-white text-black transition-all duration-200 hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label="Search"
                type="button"
              >
                <Search size={16} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`lg:hidden w-full text-white ${
          isMobileMenuOpen ? "backdrop-blur-sm bg-black/40" : ""
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          {/* Mobile Logo */}
          <Link
            href="/"
            className="block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
          >
            <Image
              src="/logos/International-Relations-Society-of-Kenya-IRSK-Logo (1).webp"
              alt="International Relations Society of Kenya Logo"
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
              priority
              sizes="120px"
            />
          </Link>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4">
            {/* Search button */}
            <button
              className="p-2 rounded-full bg-white text-black transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Search"
              type="button"
            >
              <Search size={16} />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`transition-all duration-600 ease-in-out overflow-hidden ${
            isMobileMenuOpen
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
          style={{
            transitionProperty: "max-height, opacity",
          }}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="px-4 py-6 bg-black/40">
            {/* Mobile Navigation Links */}
            <ul className="space-y-4 mb-6" role="menu">
              {navItems.map((item) => (
                <li key={item.label} role="none">
                  <Link
                    href={item.href}
                    className="block text-sm font-semibold uppercase transition-all duration-200 text-white hover:text-gray-200 hover:pl-2 focus:outline-none focus:text-gray-200 focus:pl-2 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li role="none">
                <div className="block text-sm font-semibold uppercase transition-all duration-200 text-white hover:text-gray-200 hover:pl-2 focus:outline-none focus:text-gray-200 focus:pl-2 py-2">
                  <DropdownMenu
                    label="Programs"
                    items={programsMenu}
                    isInSidebar={true}
                  />
                </div>
              </li>
              <li role="none">
                <div className="block text-sm font-semibold uppercase transition-all duration-200 text-white hover:text-gray-200 hover:pl-2 focus:outline-none focus:text-gray-200 focus:pl-2 py-2">
                  <DropdownMenu
                    label="Events"
                    items={eventsDropdown}
                    isInSidebar={true}
                  />
                </div>
              </li>
              <li role="none">
                <div className="block text-sm font-semibold uppercase transition-all duration-200 text-white hover:text-gray-200 hover:pl-2 focus:outline-none focus:text-gray-200 focus:pl-2 py-2">
                  <DropdownMenu
                    label="Media"
                    items={mediaDropdown}
                    isInSidebar={true}
                  />
                </div>
              </li>
            </ul>

            {/* Mobile Social Links */}
            <div className="pt-1">
              <p className="text-xs font-semibold uppercase mb-3 text-gray-300">
                Follow Us
              </p>
              <div
                className="flex gap-4 text-xl"
                role="list"
                aria-label="Social media links"
              >
                {socialLinks.map(({ icon: Icon, href, hoverColor, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className={`transition-all duration-200 ${hoverColor} hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded p-1`}
                    aria-label={`Visit our ${label} page`}
                    role="listitem"
                  >
                    <Icon />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
