import axios from "axios";

export const getLinks = async () => {
  const url =
    "https://nodefaastwo.netlify.com/.netlify/functions/getLinks?category=environment";
  return axios.get(url);
};
