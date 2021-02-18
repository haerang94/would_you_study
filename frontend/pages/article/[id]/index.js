import React from "react";
import { useRouter } from "next/router";
import Link from "next/Link";
const Article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  //   return <div>This is an article {id}</div>;
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
  {
    /* This is an article {article.id}</>; */
  }
};

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};
// //  동적으로 데이터를 받아온다. 데이터가 홈에 6까지 있었지만 20을 검색할 경우
// //해당 검색 결과의 id를 가져와 데이터를 보여주는 것이 가능
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  //   return {
  //     paths: { params: { id: "1", id: "2" } },
  //   };
  // fallback: 아무 데이터도 반환되지 않으면 반환하지 않는 것
  return {
    paths: paths,
    fallback: false,
  };
};

export default Article;
