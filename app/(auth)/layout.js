import connectMongo from "@/db/connectMongo";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stay Swift",
  description: "One Place Stop for Hospitability",
};

export default async function RootLayout({ children }) {
  await connectMongo();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar menubar={false} />
        <main>{children}</main>
      </body>
    </html>
  );
}
