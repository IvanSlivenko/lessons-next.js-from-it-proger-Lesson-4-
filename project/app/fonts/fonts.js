import { Geist, Bebas_Neue, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";


export  const geistSans = Geist({
  weight: ['400'],
  subsets: ["latin"],
});

export  const bebas = Bebas_Neue({
    weight: ['400'],
    subsets: ["latin"],
});

export  const ibmPlex = IBM_Plex_Mono({
    weight: ['400'],
    subsets: ["latin"],
});

export const bebasLocal = localFont({
  src: "../fonts/BebasNeue-Regular.ttf",
  weight: "400",
  style: "normal",
});

