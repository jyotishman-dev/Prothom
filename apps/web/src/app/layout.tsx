import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToastContainer } from "@/components/ui/Toast";

export const metadata: Metadata = {
  title: {
    template: "%s | Best of Assam",
    default: "Best of Assam — Verified Business Directory",
  },
  description:
    "Assam's only verified business directory where businesses earn the top spots through quality ratings and monthly open auctions. Discover verified homestays, coaching centres, restaurants and colleges.",
  metadataBase: new URL("https://bestofassam.in"),
  openGraph: {
    siteName: "Best of Assam",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-paper text-ink antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
