import { bebas, geistSans, ibmPlex } from "../../fonts";
import "./style.css";


export const metadata = {
  title: "Lessons Next from itProger",
  description: "Lessons Next from itProger",
};

export default function RootLayout({ children }) { 
  return (
    <html lang="en">
      <body 
      className={`${bebas.className}`}
      >
        {children}
      </body>
    </html>
  );
}
