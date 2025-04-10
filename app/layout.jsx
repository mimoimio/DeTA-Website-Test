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
        {/* Basic favicons */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/logo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/logo/favicon-16x16.png"
        />

        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/logo/apple-touch-icon.png"
        />

        {/* Android Chrome Icons */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/logo/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/images/logo/android-chrome-512x512.png"
        />

        {/* Web Manifest */}
        <link rel="manifest" href="/images/logo/site.webmanifest" />

        {/* Browser Theme Color */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />

        <title>Developer Tanah Air</title>
      </head>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
