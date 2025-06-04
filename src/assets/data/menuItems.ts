import type { DropdownItem } from "@/components/DropdownMenu";

export const programsMenu: DropdownItem[] = [
  {
    title: "IRSK SPEAKER SERIES",
    url: "#",
  },
  {
    title: "WOMEN IN DIPLOMACY PROGRAM",
    url: "#",
  },
  {
    title: "KENYA ANNUAL DIPLOMATIC AWARDS",
    url: "#",
  },
  {
    title: "YOUNG DIPLOMATS FORUM(YDF)",
    url: "#",
  },
];

export const eventsDropdown: DropdownItem[] = [
  {
    title: "CONFERENCES",
    url: "#",
    subItems: [
      { title: "2024 IRSK CONFERENCE", url: "#" },
      { title: "2023 IRSK CONFERENCE", url: "#" },
    ],
  },
  {
    title: "FORUMS",
    url: "#",
    subItems: [
      { title: "2025 CAREER & MENTORSHIP FORUM", url: "" },
      { title: "2023 CAREER & MENTORSHIP FORUM", url: "" },
    ],
  },
  {
    title: "WEBINARS",
    url: "#",
  },
];

export const mediaDropdown: DropdownItem[] = [
  {
    title: "NEWS & UPDATES",
    url: "#",
  },
  {
    title: "PRESS RELEASE",
    url: "#",
  },
];
