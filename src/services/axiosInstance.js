
import axios from "axios"
import { csrfToken } from "./csrfToken";

// call this first and there will be a token response.token

const foreignUrl= 'https://event-reservation-system.herokuapp.com';


const encodedUrl = btoa(unescape(encodeURIComponent(foreignUrl)))
const scraperUrl = 'https://laravel-csrf-scrapper.herokuapp.com/csrf_scraper.php';
scraperUrl+'?url=' + encodedUrl
//  console.log(scraperUrl+'?url=' + encodedUrl)

// attach token to end point (/api/event/register etc...) 
// PLEASE READ UP ON AXIOS SAME-ORIGIN, X-CSRF, X-CORS


let csrf = csrfToken().csrfTokenSet



const axiosInstance = axios.create({
    //pass baseURL, Headers in here
    // baseURL: scraperUrl+'?url=' + encodedUrl
    baseURL: 'https://event-reservation-system.herokuapp.com',
})

// const signup = aixiosInstancee.baseURL

// Vue.http.options.crossOrigin = true

let user = JSON.parse(localStorage.getItem('user'))

axios.defaults.headers.post['Authorization'] = `Bearer ${user}`
// axios.defaults.headers.post['Authorization'] = 'Bearer' + user
axios.defaults.headers.common['Authorization'] = 'Bearer'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['X-CSRF-TOKEN'] = `${csrf}`
axios.defaults.headers.common['Access-Control-Allow-Access-Control-Allow-Credentials'] = true




            // '': csrfTokeSet

// const foreignUrl= axiosInstance.baseURL; 
//the url where you want to scrape the csrf token

// const encodedUrl = btoa(unescape(encodeURIComponent(foreignUrl)))
// const scraperUrl = 'https://laravel-csrf-scrapper.herokuapp.com/csrf_scraper.php';
// scraperUrl+'?url=' + encodedUrl


axiosInstance.interceptors.request.use((config) => {
    let params = new URLSearchParams();
    // let token = store.getters[`auth/${GET_USER_TOKEN_GETTER}`]
    // params.append('auth', token)
    // params.append('auth')
    // config.headers.common['X-CSRF-TOKEN'] = `${csrf}`
    config.params = params
    return config 
})

// store
export default axiosInstance