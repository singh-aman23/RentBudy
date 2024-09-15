import "./globals.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata = {
  title: "RentBudy",
  description: "Find your perfect roommate, hassle-free.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
