import axios from "axios";
import ErrorModel from "./error.model";

export const httpService = axios.create({
  baseURL: "",
  timeout: 120000,
  headers: {}
});

httpService.interceptors.response.use(
  response => response,
  err => {
    const error = new ErrorModel(err);
    return Promise.reject(error);
  }
);

export function handleResponseError(handleError) {
  httpService.interceptors.response.use(
    response => response,
    error => {
      if (!error.stopErrorHandle) {
        error.title = "Something went wrong!";
        handleError(error);
      }
      return Promise.reject(error);
    }
  );
}

export default httpService;
