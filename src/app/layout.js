import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata = {
  title: "Uomo E-Commerce App",
  description: "Uomo E-Commerce App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable}   antialiased`}>
      <body>{children}</body>
    </html>
  );
}
