import axios from 'axios'

axios.defaults.baseURL = 'http://139.162.225.67/api/'

const signin = axios.defaults.baseURL/signin

axios.defaults.headers.common['Authorization'] = 'Basic am9zZXBoYmxlc3NpbmdAZ21haWwuY29tOmFhYQ=='

axios.interceptors.request.use(
    (config) => {
        config.headers.common['interceptorheader'] = 'Interceptor Header'
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
    )
    
    axios.interceptors.response.use(
        (response) => {
            // response.data = { hai: 'hai'}
            console.log(response)
            return response
        },
        (error) => {
        return Promise.reject(error)
    }
)