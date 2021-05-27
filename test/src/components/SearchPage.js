import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import History from "./History";

const Input = Styled.input`
    margin: 1rem;
    width: 320px;
    height: 24px;
`;

const SearchPage = ({ getUser }) => {
  const [userName, setUserName] = useState("");
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem("keywords") || "[]")
  );
  useEffect(() => {
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  const handleAddKeyword = (text) => {
    console.log("text", text);
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([...keywords, newKeyword]);
  };

  const handleRemoveKeyword = (id) => {
    const nextKeyword = keywords.filter((thisKeyword) => {
      return thisKeyword.id != id;
    });
    setKeywords(nextKeyword);
  };

  const handleClearKeywords = () => {
    setKeywords([]);
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getUser(userName);
    //submit 이후에 값 제거하기 (event.preventDefault )
    setUserName("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='GitHub ID를 입력하세요'
          value={userName}
          onChange={handleChange}
        />
      </form>
      <History
        keywrods={keywords}
        onClearKeywords={handleClearKeywords}
        onRemoveKeyword={handleRemoveKeyword}
      />
    </>
  );
};

export default SearchPage;

// todo input
// value 의 변화를 감지해서 이를 useState 의 setUserName 에 저장한다
// todo form submit
// getUser 을 통해서 userName 을 가져온다, setUserName 함수를 통해 빈 문자열로 바꿔준다
