import Navbar from "@/components/utility/navbar";

export const metadata = {
    title: "Rentbudy",
    description: "Find your perfect roommate, hassle-free.",
  };

export default function Layout({ children }) {
    return (
      <html lang="en">
        <body>
        <Navbar/>
        {children}
        </body>
      </html>
    );
  }
  