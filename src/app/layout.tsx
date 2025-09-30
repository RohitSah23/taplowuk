import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans, Oswald } from "next/font/google";

// Body font
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional, choose needed weights
});

// Heading font
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional, choose needed weights
});

export const metadata: Metadata = {
  title: "Taplow United FC",
  description:
    "Taplow United FC, established in 1923, offers football opportunities for all ages. Join our teams, view fixtures, or contact us for more information.",
  openGraph: {
    title: "Taplow United FC",
    description:
      "Taplow United FC, established in 1923, offers football opportunities for all ages. Join our teams, view fixtures, or contact us for more information.",
    url: "https://www.taplow-utd.co.uk/",
    siteName: "Taplow United FC",
    images: [
      {
        url: "https://www.taplow-utd.co.uk/images/logo.png", 
        width: 800,
        height: 800,
        alt: "Taplow United FC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taplow United FC",
    description:
      "Taplow United FC, established in 1923, offers football opportunities for all ages. Join our teams, view fixtures, or contact us for more information.",
    images: ["https://www.taplow-utd.co.uk/images/logo.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
