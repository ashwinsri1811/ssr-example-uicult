import Link from "next/link";
import React from "react";
import styles from "@/styles/List.module.css";

const Posts = ({ posts }) => {
  return (
    <>
      {posts?.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.container}>
          <h1 className={styles.heading}>All Posts</h1>
          {posts?.map((post) => {
            return (
              <div key={post.id} className={styles.link}>
                <Link href={`/${post.id}`}>{post.title}</Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};

export default Posts;
