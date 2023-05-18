import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3333/api",
});

export default http;
