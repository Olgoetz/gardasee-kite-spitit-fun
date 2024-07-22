import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer } from "@/components/footer";

import ScrollToTopButton from "@/components/scrollToTopButton";
import { Toaster } from "@/components/ui/sonner";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kite Spirit Fun Event in Soma Bay, Ägypten",
  description:
    "Kitesurfen, Yoga und Fitness Event in Soma Bay mit Michaela Süßbauer",
  metadataBase: new URL(process.env.URL!),
  keywords: [
    "Kitesurfen",
    "Fitness",
    "Gardasee",
    "Yoga",
    "Kitecamp",
    "The Breakers",
    "Soma Bay",
    "Michaela Süßbauer",
  ],

  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
        <ScrollToTopButton />
        <Toaster />
      </body>
    </html>
  );
}
