"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export interface DropdownItem {
  title: string;
  url: string;
  subItems?: DropdownItem[];
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
  isInSidebar?: boolean;
  isScrolled?: boolean;
}

export function DropdownMenu({
  label,
  items,
  isInSidebar = false,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const toggleRegion = (title: string) =>
    setExpandedRegion((prev) => (prev === title ? null : title));

  const handleMouseEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setCloseTimeout(null);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setIsOpen(false), 300);
    setCloseTimeout(timeout);
  };

  if (isInSidebar) {
    return (
      <div className="text-white">
        <button
          onClick={toggleDropdown}
          className="w-full flex justify-between items-center text-sm font-semibold uppercase transition-all duration-200 text-white hover:text-gray-200 hover:pl-2 focus:outline-none focus:text-gray-200 focus:pl-2 py-1 cursor-pointer"
        >
          {label}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pl-4 space-y-2 py-2">
            {items.map((item, index) => (
              <div key={index}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleRegion(item.title)}
                      className="flex justify-between w-full text-left text-white hover:text-gray-200 hover:pl-2 transition-all duration-200 focus:outline-none focus:text-gray-200 focus:pl-2 py-2 text-sm font-medium"
                    >
                      {item.title}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          expandedRegion === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`pl-4 transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedRegion === item.title
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="space-y-2 py-1">
                        {item.subItems.map((sub, idx) => (
                          <li key={idx}>
                            <a
                              href={sub.url}
                              className="block text-white hover:text-gray-200 hover:pl-2 transition-all duration-200 focus:outline-none focus:text-gray-200 focus:pl-2 py-1 text-sm"
                            >
                              {sub.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.url}
                    className="block text-white hover:text-gray-200 hover:pl-2 transition-all duration-200 focus:outline-none focus:text-gray-200 focus:pl-2 py-2 text-sm font-medium"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 text-xs font-semibold uppercase transition-colors text-white cursor-pointer hover:underline">
        {label}
        <ChevronDown
          className={`w-3 h-3 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute left-0 mt-2 w-70 bg-white shadow-lg z-20 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="border-t-4 border-blue-600" />
        <div className="py-1">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveSubmenu(item.title)}
            >
              {item.subItems ? (
                <>
                  <a
                    href={item.url}
                    className="flex justify-between items-center w-full px-4 py-2 text-xs text-gray-700 hover:text-blue-600 uppercase"
                  >
                    {item.title}
                    <ChevronRight className="w-3 h-3 ml-2" />
                  </a>
                  <div
                    className={`absolute left-full top-0 w-70 bg-white shadow-lg z-30 transition-opacity ${
                      activeSubmenu === item.title
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <div className="border-t-4 border-blue-600" />
                    <div className="py-1">
                      {item.subItems.map((sub, idx) => (
                        <a
                          key={idx}
                          href={sub.url}
                          className="block px-4 py-2 text-xs text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        >
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.url}
                  className="block px-4 py-2 text-xs text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
