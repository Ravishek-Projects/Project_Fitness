export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "4edadfb905msh513092763a7daa0p154eb6jsn4465f3be0a1e",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "4edadfb905msh513092763a7daa0p154eb6jsn4465f3be0a1e",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
