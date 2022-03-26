import axios from 'axios';
import config from '../config'

// 拿到 NODE_ENV 环境变量，如果是开发环境，就取config里的开发地址；
// 否则就认为这是生产环境，取config里对应的生产环境地址
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
    constructor (baseUrl) {
        // 初始化过程，把 baseUrl 添加到当前实例的baseUrl属性中
        this.baseUrl = baseUrl
    }
    // 定义 axios 配置
    getInsideConfig() {
        const config = {
            // 初始值
            baseUrl: this.baseUrl,
            // 请求头
            header: {}
        }
        return config
    }

    // 拦截器的函数
    interceptors (instance) {
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            return response;
        }, function (error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }

    // 后续接口请求时调用的函数，这个函数会接受相关配置——option
    request(option) {
        const instance = axios.create()
        // 传入的配置的相关信息
        options = { ...this.getInsideConfig(), ...options }
        // 调用拦截器
        this.interceptors(instance)
        return instance(option)
    }
}

export default new HttpRequest(baseUrl)