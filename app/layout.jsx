import Link from "next/link";
import Navbar from "./components/navbar";
import "./globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          Game data and images courtesy of{" "}
          <Link href="https://rawg.io/" target="_blank">
            RAWG
          </Link>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
