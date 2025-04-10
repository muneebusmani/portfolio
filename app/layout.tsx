import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google"; // Import Poppins and a paired mono font
import "./globals.css";
import { JSX } from "react";

// Add Poppins font
const poppins = Poppins({
  variable: "--font-poppins",  // Define custom variable for Poppins
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Customize weights as needed
});

// Add paired mono font (Roboto Mono)
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",  // Define custom variable for Roboto Mono
  subsets: ["latin"],
  weight: ["400", "500"], // You can adjust the weights
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
        className={`${poppins.variable} ${robotoMono.variable} antialiased bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen`} // Apply Poppins as main and Roboto Mono as secondary font
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
