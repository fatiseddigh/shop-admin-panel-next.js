import rubikFont from "@/constants/localFonts";
import "../globals.css";
import Header from "../Header";
import { Toaster } from "react-hot-toast";
import Providers from "../Providers";

export const metadata = {
  title: "shopping Next App",
  description: " by fateme seddigh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubikFont.variable} font-sans`}>
        <Toaster />
        <Providers>
          <Header />
          <div className="container xl:max-w-screen-xl">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
