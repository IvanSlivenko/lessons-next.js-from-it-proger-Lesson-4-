import Image from "next/image";

export default function About() {
    return (
        <div>
            <h1 style={{marginLeft: "20px"}}>Сторінка про нас</h1>
            <p
                style={{
                    background: "grey",
                    width: "210px",
                    borderRadius: "8px", // або будь-яке інше значення
                    padding: "10px",
                    color: "white",
                    lineHeight: "1.5"
                }}
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
        </div>
    );
}
