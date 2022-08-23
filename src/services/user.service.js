import axiosInstance from "@/services/axiosInstance"
import authHeader from './auth-header'

class UserService {
    getPublicContent(){
        return axiosInstance.get('/api')
    }
    
    getMyEvents(){
        return axiosInstance.get('/api/myevents', {headers: authHeader()})
    }
}

export default new UserService()