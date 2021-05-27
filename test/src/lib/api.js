import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/",
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const getUserData = async (id) => {
  try {
    const { data } = await api.get(id);
    console.log("Suceess : Get user Data", data);
    return data;
  } catch (e) {
    console.log("Fail : Get user Data");
    return null;
  }
};

export const getUserRepo = async (id) => {
  try {
    const { data } = await api.get(id + "/repos");
    console.log("Suceess : Get user Repo", data);
    return data;
  } catch (e) {
    console.log("Fail : Get User Repo");
    return null;
  }
};
