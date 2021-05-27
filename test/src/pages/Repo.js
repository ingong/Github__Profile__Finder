import React from "react";
import Styled from "styled-components";

const repoWrapper = Styled.div`
`;
const Repo = ({ repo }) => {
  return (
    <div>
      {repo.map((item) => (
        <div key={item.id} id={item.id}>
          {item.full_name}
          {item.description}
          {item.language}
          {item.updated_at}
          {item.url}
        </div>
      ))}
    </div>
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
