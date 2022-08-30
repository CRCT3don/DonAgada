import router from "@/router"
import axiosInstance from "@/services/axiosInstance"
import authHeader from './auth-header'

class UserService {
    getAllEvents(){
        return axiosInstance.get('/api/all-events')
    }
    
    getMyEvents(){
        return axiosInstance.get('/api/event/my-events', {headers: authHeader()})
    }
    
    getAllEventsUser(){
        return axiosInstance.get('/api/event', {headers: authHeader()})
    }
    
    deleteMyEvents(){
        return axiosInstance.delete('/api/event/my-delete', {headers: authHeader()})
    }

    onCreateEvent() {
        let userToken = authHeader()
    const options = {
        method: 'POST',
        url: '/api/event/create',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${userToken}`},
        data: {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          password_confirmation: ''
        }
      };
      
      axiosInstance.request(options).then((response) => {
        console.log(response.data);
        router.replace.apply('/userpost')
      }).catch((error) => {
        console.error(error);
      });
    }
}

export default new UserService()