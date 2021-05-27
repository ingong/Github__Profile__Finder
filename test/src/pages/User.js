import React from "react";
import Styled from "styled-components";

const CardWrap = Styled.div`
  .result_card {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    width: 390px;
    background-color: #231E39;
    border-radius: 10px;
    overflow: hidden;
    animation-name: comingDown;
    animation-duration: 1s;
  }
  @keyframes comingDown {
    from {
      transform: translateY(-10%);
      opacity: 0;
    } to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .result_image {
    box-sizing: border-box;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    padding: 5px;
    margin-top: 30px;
    border: 2px solid skyblue;
  }
  .result_name {
    font-size: 24px;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .result_id {
    margin: 0;
    font-size: 15px;
  }
  .result_bio {
    width: 300px;
    text-align: center;
    margin: 20px auto;
  }
  .result_link {
    text-decoration: none;
    color: gold;
    background-color: none;
    border: 2px solid gold;
    border-radius: 5px;
    font-size: 18px;
    padding: 2px 5px;
    margin-bottom: 20px;
  }
  .result_link:hover {
    background-color: gold;
    color: #231E39;
  }
  .result_list {
    display: flex;
    justify-content: space-around;
    padding-bottom: 1.5rem;
  }
  .result_list > * {
    padding: 0.5rem;
  }
  .list_title {
    width: 130px;
    background-color: skyblue;
    color: #231E39;
    text-align: center;
    font-size: 18px;
    box-sizing: border-box;
    padding: 5px;
  }
  .list_content {
    font-size: 24px;
    font-weight: bold;
  }
  .content_border {
    border-left: 2px solid #231E39;
    border-right: 2px solid #231E39;
  }
`;

const User = ({ data }) => {
  return (
    <CardWrap>
      <div className='result_card'>
        <img
          style={{ width: "100px", height: "100px" }}
          src={data.avatar_url}
          alt=''
        />
        <p className='result_name'>{data.name}</p>
        <p className='result_id'>{data.login}</p>
        <p className='result_bio'>{data.bio}</p>
        <div className='result_list'>
          <div className='result_followers'>followers : {data.followers}</div>
          <div className='result_followers'>following : {data.following}</div>
          <div className='result_repos'>repos : {data.public_repos}</div>
        </div>
      </div>
    </CardWrap>
  );
};

export default User;
