import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinderbackend0910.herokuapp.com",
});

export default instance;
