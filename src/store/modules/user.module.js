import authHeader from "@/services/auth-header"
import axiosInstance from "@/services/axiosInstance"
import userService from "@/services/user.service"

export const event ={
    namespaced: true,
    actions: { 
        onCreateEvent( user){
            return userService.onCreateEvent(user)
            .then() 
        },

            
    getMyEvents(){
        return axiosInstance.get('/api/event/my-events', {headers: authHeader()})
    }
    } 
}