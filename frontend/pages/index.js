import Head from "next/head";
import styles from "../styles/Layout.module.css";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>webDev haerang</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
