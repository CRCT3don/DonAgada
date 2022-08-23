import router from "@/router"
import axiosInstance from "@/services/axiosInstance"

// const API_URL = 'https://event-reservation-system.herokuapp.com'

class AuthService {
    async login(user) {
        const response = await axiosInstance.post('/api/signin', {
            email: user.email,
            password: user.password
        })
        if (response.data.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data.data.token))
            // router.replace('/userpost')
        }
        return response.data.data
    }

   async logout() {
        const response = await axiosInstance.get('/api/sign-out')
        if(response.message){
            localStorage.removeItem('user')
            router.replace('/')
        }
        localStorage.removeItem('user')
        return response.message
    }
    
    async register(user){
        const response = await axiosInstance.post('/api/register', {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation,
        })
        if (response.data.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data.data.token))
            // router.replace('/userpost')
        }
        return response.data.data
    }
}

export default new AuthService()