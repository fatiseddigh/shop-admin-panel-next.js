import LocalFont from "next/font/local";
const rubikFont = LocalFont({
  src: [
    {
      path: "../../public/fonts/Rubik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rubik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rubik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rubik-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rubik-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-rubik",
  style: "normal",
  display: "block",
});

export default rubikFont;
