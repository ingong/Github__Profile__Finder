import React from "react";
import User from "../pages/User";
import Repo from "../pages/Repo";
import Styled from "styled-components";

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justfiy-content: center;
`;
const ResultCard = ({ data, repo }) => {
  return (
    data &&
    repo && (
      <Wrapper>
        <User data={data} />
        <Repo repo={repo} />
      </Wrapper>
    )
  );
};

export default ResultCard;
