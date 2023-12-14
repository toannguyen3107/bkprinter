import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://localhost:5001/api",
  header: { "Content-Type": "application/json" },
});

export default customFetch;
