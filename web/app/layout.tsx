import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import { inter } from "./fonts";
import Header from "@/components/ui/index/header";
import Footer from "@/components/ui/index/footer";

export const metadata: Metadata = {
  title: "ChitChat",
  description:
    "Your Gateway to Meaningful Conversations, Authentic Friendships, and Unforgettable Moments",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
