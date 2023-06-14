import {log, error, hideHeaderLog} from "@/common/log";
import {apiServerBase, showLog} from "@/config";
import axios from "axios"
// 自定义axios实例
export const axiosClient = axios.create({
    baseURL: apiServerBase
});

/**
 * 发送请求之前进行的处理
 */
const beforeRequest = (config: any) => {
    // config.headers["mental-token"] = getLocalToken()
    config.requestTime = Date.now()
    return config
}

/**
 * 发送请求之前出现的错误
 */
const beforeRequestError = (error: unknown) => {
    // publish("show-message", {type: "error", message: "网络错误"})
    return Promise.reject(error)
}

/**
 * 响应之后进行的处理,目前后端的接口请求格式是将状态码放在response中的code中，需要在这里统一
 */
const afterResponse = (response: any) => {
    if (showLog) {
        printAjax(response)
    }
    const {success, data, message} = response.data
    if (success) {
        return data
    }
    // publish("show-message", {type: "error", message})
    return Promise.reject(message)
}
/**
 * 响应之后出现的错误
 */
const responseError = (error: any) => {
    // publish("show-message", {type: "error", message: "服务器暂时无法访问"})
    printAjax(error.response)
    return Promise.reject(error)
}


const printAjax = (response: any) => {
    const code = response.status
    const [requestUri, queryParam] = response.config.url.split("?")
    const method = response.config.method
    const title = `${method.toUpperCase()} ${code} ${requestUri}`
    let requestParam = response.config.params ?? {}
    if (method === "get" && queryParam !== undefined) {
        requestParam = queryParam.split("&").reduce((acc: any, item: any) => {
            const [key, value] = item.split("=")
            acc[key] = value
            return acc
        }, {})
    }
    code === 200 ? log(title) : error(title)
    hideHeaderLog(title, "请求耗时", `${Date.now() - response.config.requestTime}ms`)
    hideHeaderLog(title, "请求参数", requestParam)
    hideHeaderLog(title, "请求结果", response.data)
}


// 添加请求拦截器
axiosClient.interceptors.request.use(beforeRequest, beforeRequestError)

// 添加响应拦截器
axiosClient.interceptors.response.use(afterResponse, responseError)