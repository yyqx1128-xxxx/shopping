import axios from 'axios';
// import Vue from 'vue';
// import Router from '../router.js'
// axios.defaults.timeout = 30000;
// axios.defaults.baseURL = 'http://wthrcdn.etouch.cn/'

// var _token = sessionStorage.getItem('_token') || undefined;

// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     if (config.method == "get") {
//         if (config.params && config.params.token) {
//             config.headers.authorization = config.params.token;
//             delete config.params.token;
//         }
//     }else if(config.method == "post") {
//         if (config.data && config.data.token) {
//             config.headers.authorization = config.data.token;
//             delete config.data.token;
//         }
//     }
//     return config;  //添加这一行
// })

const http = {
    // 封装get请求
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: params
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    },
    // 封装post请求
    post(url, data = {}, config) {
        return new Promise((resolve, reject) => {
            axios.post(url, data, config)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    setToken(token) {
        if (token) {
            _token = decodeURI(token);
            sessionStorage.setItem('_token', token);
        } else {
            _token = undefined;
            sessionStorage.removeItem('_token');
        }
        // 请求拦截
        axios.interceptors.request.use(
            config => {
                if (_token) {
                    config.headers.authorization = _token;
                }
                return config;
            },
            error => {
                // return Promise.reject(error);
            }
        )
    },
}

export default http