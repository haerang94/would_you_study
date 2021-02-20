import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [text, setText] = useState<string>('자바스크립트');
  let a: number = 2;
  setTimeout(() => {
    setText("0");
    // setText("타입스크립트")
  }, 1000);

  return (
    <div className="container">
      <div>
        <span>{text} 적용 완료</span>
      </div>
    </div>
  );
}

// import Head from 'next/head';
// import styles from 'styles/Layout.module.css';
// import ArticleList from 'components/Article/ArticleList';
// import { server } from 'config';

// export default function Home({ articles }) {
//   return (
//     <div className={styles.container}>
//       <ArticleList articles={articles} />
//     </div>
//   );
// }

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

// // export const getStaticProps = async () => {
// //   const res = await fetch(
// //     `https://jsonplaceholder.typicode.com/posts?_limit=6`
// //   );
// //   const articles = await res.json();

// //   return {
// //     props: {
// //       articles,
// //     },
// //   };
// // };
