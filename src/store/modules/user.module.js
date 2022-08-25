import userService from "@/services/user.service"

export const event ={
    namespaced: true,
    actions: { 
        onCreateEvent( user){
            return userService.onCreateEvent(user)
            .then() 
        }
    }
}