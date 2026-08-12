import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({ variable: "--font-display", subsets: ["latin"], weight: ["600", "700", "800"] });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const title = "Animal Restaurant (Anomaly) Beginner Guide & Wiki";
const description = "Survive your first Animal Restaurant (Anomaly) shift with a verified beginner guide to orders, anomaly checks, upgrades, mistakes, and FAQs.";

export const metadata: Metadata = {
  metadataBase: new URL("https://animalrestaurantanomaly.wiki"),
  title: { default: title, template: "%s | Animal Restaurant Anomaly Guide" },
  description,
  keywords: ["Animal Restaurant Anomaly guide", "Animal Restaurant Anomaly Roblox", "Animal Restaurant Anomaly wiki", "Animal Restaurant anomaly beginner guide"],
  alternates: { canonical: "/" },
  icons: { icon: "/images/animal-restaurant-icon.png", apple: "/images/animal-restaurant-icon.png" },
  openGraph: { title, description, type: "website", url: "/", siteName: "Animal Restaurant Anomaly Guide", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Animal Restaurant Anomaly beginner shift guide" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  robots: { index: true, follow: true },
  category: "games",
};

export const viewport: Viewport = { themeColor: "#151815", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
