import router from "@/router"
import axiosInstance from "@/services/axiosInstance"
// import authHeader from "./auth-header"
// import authHeader from "@/services/auth-header"

class AuthService {
    async login(user) {
        const response = await axiosInstance.post('/api/signin', {
            email: user.email,
            password: user.password
        })
        if (response.data.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data.data.token))
            router.replace('/userpost')
            localStorage.setItem('uid', JSON.stringify(response.data.data.user.uid))
        }
        return response.data.data
    }

   logout() {
       if (localStorage.getItem('user')) {
           localStorage.removeItem('user')
           localStorage.removeItem('uid')
           return axiosInstance.get('/api/sign-out')
        }
    }

    // autoLogout(){
    //     setTimeout(() => {
    //         this.logout
    //     }, 10000);
    // }
    
    async register(user){
        const response = await axiosInstance.post('/api/register',
         {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation,
        }) 
        if (response.data.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data.data.token))
            router.replace('/userpost')   
            console.log(response.data)
            localStorage.setItem('uid', JSON.stringify(response.data.data.user.uid))
        }
        return response.data.data
    }
}

export default new AuthService()