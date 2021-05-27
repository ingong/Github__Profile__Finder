import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
import Styled from "styled-components";
import { getUserData, getUserRepo } from "./lib/api";

const MainWrap = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
      <SearchBar getUser={getUser} />
      <Result userData={userData} />
    </MainWrap>
  );
}

export default App;
