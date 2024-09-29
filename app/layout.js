import "./globals.css";
import { AuthProvider } from "./Providers";

export const metadata = {
  title: "RentBudy",
  description: "Find your perfect roommate, hassle-free.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
