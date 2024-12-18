import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bbc648dd842b4e66bf6c149dda8588b7",
  },
});
