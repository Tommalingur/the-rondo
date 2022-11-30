import ".././App.css";
import "./Screens.css";
import React from "react";
import styled from "styled-components";

const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 4fr 1fr;
  grid-template-areas:
    ". mainarticle mainarticle mainarticle articlelist articlelist . ."
    ". newslist newslist newslist newslist newslist .";
  grid-area: body;
`;

const MainArticleContent = styled.div`
  display: grid;
  grid-area: mainarticle;
`;

const ArticleListContent = styled.div`
  display: grid;
  grid-area: articlelist;
`;

const NewsContent = styled.div`
  display: grid;
  grid-area: newslist;
`;

function Home() {
  return (
    <HomeGrid className="HomeGrid">
      <MainArticleContent className="MainArticleContent">
        Main article
      </MainArticleContent>
      <ArticleListContent className="ArticleListContent">
        Article list content
      </ArticleListContent>
      <NewsContent className="NewsContent">News Content</NewsContent>
    </HomeGrid>
  );
}

export default Home;
