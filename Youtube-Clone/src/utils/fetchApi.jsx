import axios from "axios";
const BASE_URL = `https://youtube-v31.p.rapidapi.com`;
const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "08cdef9ef6msh20046dfe1bfeac2p19e469jsn4a28817a861c",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
