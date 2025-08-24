
import { bebas, geistSans, ibmPlex } from "../fonts/fonts";
import Link from "next/link";

const Post = ({post}) => {
  return (
    <div>
        <Link href="/">Home</Link>
        <h2 className={`${ibmPlex.className} myCustomClass`}>{post.title}</h2>
        <p className={`${ibmPlex.className} myCustomClass`}>{post.body}</p>
        <strong className={`${geistSans.className} myCustomClass`}>Author ID: {post.userId}</strong></div>
  )
}

export default Post