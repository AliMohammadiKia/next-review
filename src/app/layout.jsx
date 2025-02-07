import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <footer className="text-center my-4">this is a footer</footer>
      </body>
    </html>
  );
}
