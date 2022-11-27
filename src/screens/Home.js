import ".././App.css";
import React from "react";
import styled from "styled-components";
import { HeaderButton } from "../components/Components";

const HomeGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1.5fr 1.5fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 2.5fr 0.5fr;
  grid-template-areas:
    "nav nav nav nav"
    ". . . ."
    ". content content ."
    ". . . .";
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  grid-area: content;
`;

function Home() {
  return (
    <HomeGrid>
      <MainContent>
        <HeaderButton>Button works!</HeaderButton>
      </MainContent>
    </HomeGrid>
  );
}

export default Home;
