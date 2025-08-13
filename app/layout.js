import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TechInsights - Technology Blog",
  description: "Your go-to source for technology news, tutorials, and insights. Exploring the latest in technology and innovation.",
  keywords: "technology, programming, web development, AI, machine learning, tutorials",
  authors: [{ name: "TechInsights Team" }],
  creator: "TechInsights",
  publisher: "TechInsights",
  openGraph: {
    title: "TechInsights - Technology Blog",
    description: "Your go-to source for technology news, tutorials, and insights",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechInsights - Technology Blog",
    description: "Your go-to source for technology news, tutorials, and insights",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
