import "./globals.css";
import BottomNavbar from "@/components/BottomNavbar";
import TopNavbar from "@/components/TopNavbar";
export const metadata = {
  title: "FurEver Home",
  description: "Find your furever home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TopNavbar />
        {children}
        <BottomNavbar />
      </body>
    </html>
  );
}
