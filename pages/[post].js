import React from "react";
import styles from "@/styles/Post.module.css";
import Head from "next/head";

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>{`Post ${post.id}`}</title>
        <meta name="description" content={`Post by ${post.userId}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.body}</p>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postData = await res.json();

  const paths = postData.map((post) => ({
    params: {
      post: String(post.id),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { post } }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`);
  const postData = await res.json();

  return {
    props: { post: postData },
  };
};

export default Post;
