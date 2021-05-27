import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
import History from "./components/History";
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
        <SearchBar getUser={getUser} />
        <History />
        <Result userData={userData} />
      </Router>
    </MainWrap>
  );
}

export default App;
