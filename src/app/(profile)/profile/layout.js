import rubikFont from "@/constants/localFonts";
import "../../globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "../../Providers.jsx";
import SideBar from "./SideBar";

export const metadata = {
  title: "profile",
  description: "profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubikFont.variable} font-sans`}>
        <Providers>
          <Toaster />
          <div className="grid grid-cols-4 bg-white h-screen ">
            <div className="col-span-1 bg-gray-100 overflow-y-auto p-4">
              <SideBar />
            </div>
            <div className="col-span-3  overflow-y-auto p-4">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
