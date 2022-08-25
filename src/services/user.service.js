import router from "@/router"
import axiosInstance from "@/services/axiosInstance"
import authHeader from './auth-header'

class UserService {
    getAllEvents(){
        return axiosInstance.get('/api/events')
    }
    
    getMyEvents(){
        return axiosInstance.get('/api/event/my-events', {headers: authHeader()})
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

    // onCreateEvent(user){
    //    return axiosInstance.post('/api/event/create' ,
    //         {headers: authHeader()}, 
    //         {
    //         event_name: user.event_name,
    //         type: user.type,
    //         event_date: user.event_date,
    //         start_time: user.start_time,
    //         maximum_seats: user.maximum_seats,
    //         location: user.location,
    //     })
    //     .then(response => {
    //         console.log(response)
    //         router.replace('/userpost')
    //     })
    // }
}

export default new UserService()