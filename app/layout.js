import "./globals.css";
import { Bricolage_Grotesque, Patua_One, Pridi, Reem_Kufi } from "next/font/google";

const font = Reem_Kufi({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Portfolio - Gabriel Orie",
    default: "Gabriel Orie | Portfolio",
  },
  description: "Fullstack web developer. Visual Designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
