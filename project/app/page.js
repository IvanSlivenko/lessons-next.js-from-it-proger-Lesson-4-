import Image from "next/image";
import Link from "next/link";
import { bebas, geistSans, ibmPlex } from "./fonts/fonts";


async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await  res.json();
  return result;
}

export default async function Home() {
  const posts = await fetchData();

  return (
    <div>
      {posts.map(el=>(
        <div key={el.id} className="post">
          <h2>{el.title}</h2>
          <p className={`${ibmPlex.className} myCustomClass`}>{el.body}</p>
          <Link href={`/post/` + el.id}>Детальніше...</Link>
        </div>
      ))}

      
    </div>
  );
}
