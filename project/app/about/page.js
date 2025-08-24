import { bebasLocal } from "../fonts/fonts";
import Link from "next/link";

export const metadata = {
  title: "Про нас",
  description: "Опис сторінки про нас",
  keywords: ''
};

export default function About() {
    return (
        <div className="post">
            <h1>Про нас</h1>
            <p
                // style={{
                //     background: "grey",
                //     width: "270px",
                //     borderRadius: "8px", // або будь-яке інше значення
                //     padding: "10px",
                //     color: "white",
                //     lineHeight: "1.5"
                // }}
            >
                Здається, шо то було так давно
                <br></br>
                Коли в руках тримаю цей альбом
                <br></br>
                Нам було абсолютно все одно
                <br></br>
                Не маючи нічого, мати всьо
                <br></br>
                За гроші не купити тільки час
                <br></br>
                Він всіх нас методично поділив
                <br></br>
                Когось він опустив, когось підняв
                <br></br>
                А є на кого, взагалі, забив</p>

                <Link href="/">Home</Link>
        </div>
    );
}
