import React, { useState } from "react";
import SearchPage from "./components/SearchPage";
import Result from "./components/Result";
import Styled from "styled-components";
import { getUserData, getUserRepo } from "./lib/api";
import { BrowserRouter as Router } from "react-router-dom";

const MainWrap = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

function App() {
  const [userData, setUserData] = useState({
    status: "idle",
    data: null,
    repo: null,
  });

  const getUser = async (id) => {
    setUserData({ ...userData, status: "pending" });
    try {
      const data = await getUserData(id);
      const repo = await getUserRepo(id);
      console.log(repo);
      if (data === null) throw Error;
      setUserData({ status: "resolved", data: data, repo: repo });
    } catch (e) {
      setUserData({ status: "rejected", data: null, repo: null });
    }
  };

  return (
    <MainWrap>
      <Router>
        <SearchPage getUser={getUser} />
        <Result getUser={getUser} userData={userData} />
      </Router>
    </MainWrap>
  );
}

export default App;
