import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import { orbitron, exo2 } from "@/app/fonts";

export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
  description: "Only the best indie games, reviewed for you",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs text-slate-500">
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
