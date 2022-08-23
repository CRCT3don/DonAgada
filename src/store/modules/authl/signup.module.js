// import axiosInstance from "@/services/axiosInstance"
import axios from "axios"

export default {
    namespaced: true,
    state() {
        return {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                password_confirmation: "",
                token: "",
        }
    },

    mutations: {
        SIGN_UP(state, payload) {
            // const signup = 
            state.first_name = payload.first_name
            state.last_name = payload.last_name
            state.email = payload.email
            state.password = payload.password
            state.password_confirmation = payload.password_confirmation
            state.token = payload.token
        }
    },

    getters: {},

    actions: {
        signup({commit}) {
            return commit("SIGN_UP")
        },
        // SIGN_UP_ACTION(context, payload) {
        signUpAction({ commit }, payload) {
            return commit('SIGN_UP', {
                // ...payload,
                method: "POST",
                url: 'https://event-reservation-system.herokuapp.com/api/register',
                data:{
                    ...payload
                },
                // headers: {'Content-Type' : 'application/json', Authorization: 'Bearer'}
            },

                // axiosInstance
                axios
                    .request()
                    .then((response) => {
                        console.log(response);
                        //   this.isSignUp = true;
                        //   this.$router.replace("/userpost");
                    })
                    .catch((error) => {
                        console.error(error);
                        //   this.errorCode = true
                        //   this.errorPassword = error.response.data.errors
                        //   this.errorPassword = error.response.data.errors.password
                    }))
        },
    }
}