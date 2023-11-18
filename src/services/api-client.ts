import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c47302f359364f339fdecf4257030396",
  },
});

export { CanceledError };
