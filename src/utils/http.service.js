import axios from "axios";

export const httpService = axios.create({
  baseURL: "",
  timeout: 120000,
  headers: {}
});

export default httpService;
