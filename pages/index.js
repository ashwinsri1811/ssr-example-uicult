import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Posts App by Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {posts?.length === 0 ? (
          <div>Loading...</div>
        ) : (
          posts?.map((post) => (
            <div key={post.id} className={styles.post}>
              <div
                className={styles.postTitle}
              >{`${post.id}. ${post.title}`}</div>
              <div>{post.body}</div>
            </div>
          ))
        )}
      </main>
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();

//   return {
//     props: {
//       posts: data,
//     },
//   };
// }
