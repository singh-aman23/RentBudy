import Navbar from "@/components/utility/navbar";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata = {
    title: "Rentbudy",
    description: "Find your perfect roommate, hassle-free.",
  };

export default function Layout({ children }) {
    return (
      <html lang="en" className={poppins.className}>
        <body>
        <Navbar/>
        {children}
        </body>
      </html>
    );
  }
  