import { Inter } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
const font = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${font.className}`}
    >
      <CookieConsent />
    </main>
  );
}
