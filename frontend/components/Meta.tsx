import React from "react";
import Head from "next/head";

interface MetaProps{
  title:string,
  keywords:string,
  description:string
}

const Meta = ({ title, keywords, description }:MetaProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "would you study",
  keywords: "learning platform, group todolist",
  description: "그룹 투두리스트로 진행하는 온라인 학습 플랫폼. 우주 스터디는 그룹으로 스터디를 생성하며 과제를 달성하며서 씨앗을 얻고 식물을 키우며 달성도를 채워나가는 자기주도학습 플랫폼입니다.",
  
};

export default Meta;
