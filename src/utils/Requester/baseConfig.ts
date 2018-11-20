/**
 * @description axios基础配置
 */
import {
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios';
import qs from 'qs';

const baseConfig: AxiosRequestConfig = {
    baseURL: '/',
    timeout: 10000,
    maxRedirects: 5,
    responseType: 'json',
    withCredentials: true,
    maxContentLength: 2000,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    transformRequest: [(data: AxiosResponse) => data],
    paramsSerializer: (params: object) => qs.stringify(params),
    validateStatus: (status: number) => status >= 200 && status < 300,
    // proxy: {},
    // onUploadProgress: (ProgressEvent: any) => {},
    // onDownloadProgress: (ProgressEvent: any) => {},
};

export default baseConfig;
