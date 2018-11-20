import BaseModel from './Requester/baseModel';
import oAuthConfig from '../common/config';

BaseModel.interceptors.request.use(config => config, error => Promise.reject(error));

BaseModel.interceptors.response.use(
    (res) => {
        console.info('res1', res);
        return res;
    },
    error => {
        console.info('err', error);
        return Promise.reject(error);
    }
);

export default function oAuthLogin() {
    return BaseModel({
        url: `https://${oAuthConfig.GIT_URL}/login/oauth/authorize`,
        method: 'GET',
        params: {
            client_id: oAuthConfig.CLIENT_ID,
            scope: 'user:email',
        },
    }).then(res => {
            console.info('res3', res);
            // return res;
            window.location.href =
            `https://${oAuthConfig.GIT_URL}/login/oauth/authorize?client_id=${oAuthConfig.CLIENT_ID}`;
        }
    )
    .catch(err => {
        console.info(err);
    });
}