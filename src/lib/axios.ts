import axios, { AxiosError, AxiosResponse } from "axios";

interface IError {
  error: string;
  message: string;
  statusCode: number;
}

const instance = axios.create({
  baseURL: process.env.API_URL,
});

instance.interceptors.request.use(
  (config: any) => config,
  (error: AxiosError): Promise<IError> => {
    return Promise.reject(error.response?.data);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response?.data;
  },
  (error: AxiosError): Promise<IError> => {
    const errorResponse: any = error?.response?.data;
    return Promise.reject(errorResponse);
  }
);

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
