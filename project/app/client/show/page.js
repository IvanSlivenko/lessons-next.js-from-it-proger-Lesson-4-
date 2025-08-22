import { bebas, geistSans, ibmPlex } from "../../fonts";
import Link from "next/link";



export default function Show() {
  return (


    <div
      style={{
        background: "#dadb99ff",
        minHeight: "100vh",
        color: "#3d2903ff",
      }}
    >
      <span>-------------------------------------- Fonts</span>

      <h1 className={geistSans.className}>Show cторінка</h1>
      <h2 className={ibmPlex.className}>Контент</h2>
      <h3 className={bebas.className}>2222</h3>

      <span>-------------------------------------- Links</span>

      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Link
          href='/'
          style={{
            textDecoration: "none",
            color: "grey",
            fontSize: "25px"
          }}
        >
          Головна сторінка
        </Link>
        <Link
          href='/client/12345'
          style={{
            textDecoration: "none",
            color: "grey",
            fontSize: "25px"
          }}
        >
          Клієнт 12345
        </Link>
      </div>

          <span>--------------------------------------</span>

    </div>
  );
}
