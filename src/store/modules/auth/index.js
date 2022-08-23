import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"


export default {
    namespaced: true,
    state(){
        return{
            first_name: "",
            last_name: "",
            email: '',
            isLogin: false,	
            password: "",
            password_confirmation: "",
            token: null,
            user: null,	
            autoLogout: false,	
        }
    },
    mutations,
    getters,
    actions
} 