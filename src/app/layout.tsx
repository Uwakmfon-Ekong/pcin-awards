import { Toaster } from "sonner";
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Inter,
  Poppins,
  Roboto,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pcin-awards.vercel.app"),
  title: "PCIN Awards - Photography & Cinematography Excellence",
  description:
    "Photography and Cinematography Industry Night and Awards – celebrating excellence, creativity, and visual storytelling across Africa.",
  keywords: [
    "PCIN Awards",
    "Photography awards",
    "Cinematography",
    "Creative industry",
    "Awards in Africa",
    "Photographers in Nigeria",
    "Nollywood Cinematography",
    "Media Industry",
  ],
  authors: [{ name: "PCIN Awards" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://pcin-awards.vercel.app",
  },
  icons: {
    icon: "/pcinlogo.svg",
  },

  openGraph: {
    title: "PCIN Awards - Celebrating Creative Excellence",
    description:
      "Join the biggest celebration of photography & cinematography talent in Africa – PCIN Awards.",
    url: "https://pcin-awards.vercel.app",
    siteName: "PCIN Awards",
    images: [
      {
        url: "https://pcin-awards.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "PCIN Awards - Photography & Cinematography Industry Night",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PCIN Awards - Celebrating Creative Excellence",
    description:
      "Join the biggest celebration of photography & cinematography talent in Africa – PCIN Awards.",
    images: ["/https://pcin-awards.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} ${poppins.variable} ${roboto.variable} font-inter antialiased`}
      >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
