import React, { useRef } from "react";
import Styled from "styled-components";

const RepoWrapper = Styled.div`
    .repo__card{
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;
        margin: 12px 0;
        padding: 12px;
        font-size: 12px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

        &__content{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 8vh;
        }
        &__btn{
        color: #444444;
        background: #F3F3F3;
        border: 1px #DADADA solid;
        padding: 5px 10px;
        height: 50%;
        border-radius: 2px;
        font-weight: bold;
        font-size: 9pt;
        outline: none;
        color: white;
        background: #4C8FFB;
        border: 1px #3079ED solid;
        box-shadow: inset 0 1px 0 #80B0FB;
        }
    }
`;
const Repo = ({ repo }) => {
  const buttonEl = useRef(null);
  const onButtonClick = (URL) => {
    window.open([URL], "_blank");
  };
  return (
    <RepoWrapper>
      {repo.map((item) => (
        <div className='repo__card' key={item.id} id={item.id}>
          <div className='repo__card__content'>
            <div className='repo__card__content__title'>{item.name}</div>
            <div className='repo__card__content__desc'>{item.description}</div>
            <div className='repo__card__content__language'>{item.language}</div>
            <div className='repo__card__content__update'>{item.updated_at}</div>
          </div>
          <button
            className='repo__card__btn'
            ref={buttonEl}
            onClick={() => onButtonClick(item.html_url)}
          >
            이동
          </button>
        </div>
      ))}
    </RepoWrapper>
  );
};

export default Repo;
// repo name 이름 => full_name
// readme 에 내용 => description
// 어떤 언어 => language
// 언제 업데이트 되었는지 => updated_at
// {nowPlaying && nowPlaying.length > 0 && (
//   <Section title='Now Playing'>
//     {nowPlaying.map((movie) => (
//       <Poster
//         key={movie.id}
//         id={movie.id}
//         title={movie.original_title}
//         imageUrl={movie.poster_path}
//         isMovie={true}
//         rating={movie.vote_average}
//         year={movie.release_date.substring(0, 4)}
//       />
//     ))}
//   </Section>
// )}
