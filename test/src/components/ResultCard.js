import React from "react";
import User from "../pages/User";
import Repo from "../pages/Repo";
import Styled from "styled-components";

const Wrapper = Styled.div`
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin: 2rem;
`;
const ResultCard = ({ data, repo, getUser }) => {
  return (
    data &&
    repo && (
      <Wrapper>
        <User data={data} getUser={getUser} />
        <Repo repo={repo} />
      </Wrapper>
    )
  );
};

export default ResultCard;
