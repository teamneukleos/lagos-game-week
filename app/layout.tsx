import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra",
});

export const metadata: Metadata = {
  title: "Lagos Games Week",
  description: "Africa's biggest gaming event",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${chakra.variable} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}