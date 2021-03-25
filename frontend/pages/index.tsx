import React, { useState } from 'react';
import ArticleList from 'components/Article/ArticleList';
import Layout from 'components/Layout';
import { server } from 'config';


type articleProps={
    userId:number;
    id:number;
    title:string;
    body:string;
}

type articlesProps={
    articles:articleProps[];
};


export default function Home({ articles }:articlesProps) {
  return (
    <div>
      <Layout>
        <ArticleList articles={articles} /> 
      </Layout>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

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
