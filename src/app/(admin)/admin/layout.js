import rubikFont from "@/constants/localFonts";
import "../../globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "../../Providers";

export const metadata = {
  title: "admin panel",
  description: "admin panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubikFont.variable} font-sans`}>
        <Providers>
          <Toaster />
          <div className="container xl:max-w-screen-xl">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
