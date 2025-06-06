import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

// ✅ Add icons field to metadata
export const metadata: Metadata = {
  title: "IRSK",
  description: "Generated by create next app",
  icons: {
    icon: "/logos/irsk.jpg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

