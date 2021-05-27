import React from "react";
import ResultCard from "./ResultCard";

const Result = ({ userData }) => {
  const { status, data, repo } = userData;
  switch (status) {
    case "pending":
      return (
        <div style={{ color: "orange", fontSize: "24px" }}>Loading...</div>
      );
    case "resolved":
      return <ResultCard data={data} repo={repo} />;
    case "rejected":
      return (
        <div style={{ color: "orange", fontSize: "24px" }}>User Not Found</div>
      );
    case "idle":
    default:
      return <div></div>;
  }
};

export default Result;
