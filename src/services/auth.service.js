import router from "@/router"
import axiosInstance from "@/services/axiosInstance"
import authHeader from "./auth-header"
// import authHeader from "@/services/auth-header"

// const API_URL = 'https://event-reservation-system.herokuapp.com'

class AuthService {
    async login(user) {
        const response = await axiosInstance.post('/api/signin', {
            email: user.email,
            password: user.password
        })
        if (response.data.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data.data.token))
            router.replace('/userpost')
        }
        return response.data.data
    }

   logout() {
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user')
    }
        return axiosInstance.get('/api/sign-out')

    }

    // autoLogout(){
    //     setTimeout(() => {
    //         this.logout
    //     }, 10000);
    // }
    
    async register(user){
        const response = await axiosInstance.post('/api/register', {headers: authHeader()}, {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation,
        })
        if (response.data.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data.data.token))
            router.replace('/userpost')
        }
        return response.data.data
    }

    // async onCreateEvent(event){
    //     const response = await axiosInstance.post('/api/event/create', {headers: authHeader()}, {
    //         first_name: event.first_name,
    //         last_name: event.last_name,
    //         email: event.email,
    //         password: event.password,
    //         password_confirmation: event.password_confirmation,
    //     })
    //     if (response.data) {
    //         console.log(response)
    //         router.replace('/userpost')
    //     }
    //     return response.data.data
    // }
}

export default new AuthService()