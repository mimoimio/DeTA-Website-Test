import {
  Inter,
  Lato,
  Open_Sans,
  Roboto,
  Montserrat,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], weight: "400" });

// alternative fonts
// const roboto = Inter({ subsets: ["latin"], weight: "300" });
const openSans = Open_Sans({ subsets: ["latin"], weight: "300" });
const lato = Lato({ subsets: ["latin"], weight: "300" });
export const metadata = {
  title: "DeTA",
  description: "",
};
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/Deta.png"
        />
        <title>Developer Tanah Air</title>
      </head>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
