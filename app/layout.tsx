import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google"; // Import Poppins and a paired mono font
import "../lib/fontawesome"; // Before any other CSS
import "./globals.css";
import { JSX } from "react";
// Add Poppins font
const poppins = Poppins({
  variable: "--font-poppins", // Define custom variable for Poppins
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Customize weights as needed
});

// Add paired mono font (Roboto Mono)
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono", // Define custom variable for Roboto Mono
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Customize weights as needed
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Portfolio in Next",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element => {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${robotoMono.variable} antialiased bg-gray-900 text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
