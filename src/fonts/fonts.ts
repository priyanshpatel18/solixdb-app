import { Syne } from "next/font/google";

const syneFont = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

export const syne = syneFont.className;