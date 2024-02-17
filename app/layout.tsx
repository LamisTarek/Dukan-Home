// import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";

export const metadata = {
  //font

  title: "Dukan",
  description: "Buy & Get Your Product",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          <main className="container mx-auto px-4 overflow-x-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
