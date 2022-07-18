import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export type RequestParams = AxiosRequestConfig;

export class Http {
  axios: AxiosInstance;

  constructor(options?: AxiosRequestConfig) {
    this.axios = axios.create(options);
  }

  request<Rsp, Req>(params: AxiosRequestConfig<Req>) {
    return this.axios.request<Req, AxiosResponse<Rsp>>(params);
  }
}

export const http = new Http();
