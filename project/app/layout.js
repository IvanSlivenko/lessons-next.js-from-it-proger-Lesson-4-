import Header from "./components/Header";
import { bebas, bebasLocal, geistSans, ibmPlex } from "./fonts/fonts";
import "./globals.css";

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
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
