import router from "@/router"
import axiosInstance from "@/services/axiosInstance"
import authHeader from './auth-header'

class UserService {
  
    getAllEvents(){
        return axiosInstance.get('/api/all-events')
    }

    makeReservation(payload){
        return axiosInstance.post('/api/reservation', {
        name: payload.name,    
        event_id: payload.event_id,
        phone: payload.phone,
        email: payload.email,
        ticket_type: payload.ticket_type,
        number_of_reservation : payload.number_of_reservation
      })
      .then((response) => {
        console.log(response)
        router.replace('/printinvoice')
      }) 
      // .catch(error => console.log(error))
    //  return response.data
    }
    
    getMyEvents(){
        return axiosInstance.get('/api/event/my-events', {headers: authHeader()})
    }
    
    getAllEventsUser(){
        return axiosInstance.get('/api/event', {headers: authHeader()})
    }

    updateEvent(payload){
        return axiosInstance.post('/api/event/update', {
          // headers: authHeader()}, {
          headers: payload.user}, {
          event_id: payload.event_id,
          event_name: payload.event_name,
          location: payload.location,
          event_date: payload.event_date,
          type: payload.type,
          status: 'active',
          start_time: payload.start_time,
          maximun_seats: payload.maximun_seats,
        })
        .then(() => router.replace('/userpost'))
      }

    async createEvent(payload){
      await axiosInstance.post('/api/event/create', { headers: authHeader() },
        {
          // event_id: payload.events_id,
          // user_id: JSON.parse(localStorage.getItem("uid")),
          user_id: payload.user_id,
          event_name: payload.event_name,
          location: payload.location,
          event_date: payload.event_date,
          type: payload.type,
          status: payload.status,
          description: payload.description,
          start_time: payload.start_time,
          maximun_seats: payload.maximun_seats,
        })
        return await router.replace('/userpost')
    }
    
    deleteMyEvents(payload){
        return axiosInstance.delete('/api/event/my-delete', {headers: authHeader()},
        {
          event_id : payload.id,
          event_name: payload.event_name
        })
        .then((res) => {
          console.log(res)
        })
        .catch(err => console.log(err))
    }
}

export default new UserService()