/**
 * @description axios请求拦截器
 */
import axios from 'axios';
import baseConfig from './baseConfig';

let pending: Array<{
    url: string,
    cancel: Function,
}>;

const removePending = config => {
    for (let p in pending) {
        if (pending.hasOwnProperty(p)) {
            let item: any = p;
            let list: any = pending[p];
            if (list.url === config.url + '&request_type=' + config.method) {
                list.cancel();
                pending.splice(item, 1);
            }
        }
    }
};

const BaseModel = axios.create(baseConfig);

BaseModel.interceptors.request.use(
    config => {
        removePending(config);
        // if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        //     config.headers.Authorization = token;
        // }
        return config;
    },
    error => Promise.reject(error)
);

BaseModel.interceptors.response.use(
    res => {
        removePending(res.config);
        return res;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 这里写清除token的代码
                    // Router.replace({
                    //     path: '/login',
                    //     query: {
                    //         redirect: Router.currentRoute.fullPath
                    //     }
                    // });
                    console.info(error);
                    break;
                default:
                    return ;
            }
        }
        return Promise.reject(error.response.data); 
    }
);

export default BaseModel;
