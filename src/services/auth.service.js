import router from "@/router"
import axiosInstance from "@/services/axiosInstance"
import authHeader from "./auth-header"
// import authHeader from "@/services/auth-header"

// const timeoutInMS = 10000; // 3 minutes -> 3 * 60 * 1000
// let timeoutId;
  
class AuthService {
        
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
           return axiosInstance.get('/api/sign-out', {headers: authHeader()} )
        }
    }

    //AUTO LOGOUT FUNCTION
    // autoLogout(){
    //     this.logout()
    // }

    // startTimer() {
    //     timeoutId = setTimeout(this.autoLogout, timeoutInMS)
    // }

    // resetTimer(){
    //     clearTimeout(timeoutId)
    //     this.startTimer()
    // }

    // setupTimers(){
    //     document.addEventListener("keypress", this.resetTimer, false);
    //     document.addEventListener("mousemove", this.resetTimer, false);
    //     document.addEventListener("mousedown", this.resetTimer, false);
    //     document.addEventListener("touchmove", this.resetTimer, false);
         
    //     this.startTimer();
    // }

    autoLogout(){
        let user = localStorage.getItem('user')
        if (user) {
        setTimeout(() => {
            localStorage.removeItem('user')
            localStorage.removeItem('uid')
            return axiosInstance.get('/api/sign-out', {headers: authHeader()} ) 
        }, 10000)}
        return router.replace('/')

    }
}

export default new AuthService()