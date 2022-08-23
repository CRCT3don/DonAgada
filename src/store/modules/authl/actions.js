// import router from "@/router";
// import axiosInstance from "@/services/axiosInstance";
// import store from "@/store";
// import SignUpValidations from "@/services/SignUpValidations";
// import { LOADING_SPINNER_SHOW_MUTATION } from "@/store/storeconstants";
// uncomment above if you're using loading spinner in this file
import axiosInstance from "@/services/axiosInstance";
// import store from "@/store";
import { AUTH_ACTION, AUTO_LOGIN_ACTION, AUTO_LOGOUT_ACTION, LOGIN_ACTION, LOGOUT_USER, SET_AUTO_LOGOUT_MUTATION, SET_USER_TOKEN_DATA_MUTATION, SIGNUP_ACTION } from "@/store/storeconstants";
// import axios from "axios";

let timer = ''
let token = ''
  
export default {
    [LOGOUT_USER](context, payload) {
        context.commit(SET_USER_TOKEN_DATA_MUTATION, {
            ...payload,
            url: `api/signout`,
            email: null,
            token: null,
            expiresIn: null,
            userId: null,
        })
        localStorage.removeItem('userData')
        if(timer){
            clearTimeout(timer)
        }
    },

    [AUTO_LOGOUT_ACTION](context){
        context.dispatch(LOGOUT_USER)
        context.commit(SET_AUTO_LOGOUT_MUTATION)
    },
    
    async[LOGIN_ACTION](context, payload){
        return context.dispatch(AUTH_ACTION, {
            ...payload,
            url: `/api/signin`
        })
    },

    // async [SIGNUP_ACTION] (_, payload) {
    //uncomment above if the mutation is yet to be set
    // async[SIGNUP_ACTION](context) {
    //     return context.dispatch(AUTH_ACTION, {
    //         url: `/api/register`
    //     },
        
    //     axiosInstance
    //     // axios
    //     .request()
    //     .then((response) => {
    //         // response.data.data.token = store. state.token
    //         response.data.data.token = token
    //         context.commit(SET_USER_TOKEN_DATA_MUTATION, token)
    //       console.log(response);
    //       router.replace('/userpost')
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     })) 
    // },

    [SIGNUP_ACTION]: ({commit}, payload) => {
        if(payload) {
            let authUser = null
            axiosInstance.post('/api/register')
            .then((response) => {
                console.log(response)
                this.$router.replace('/userpost')
                commit(SET_USER_TOKEN_DATA_MUTATION, authUser)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },



    [AUTO_LOGIN_ACTION](context){
        let userDataString = localStorage.getItem('userData')

        if(userDataString){
            let userData = JSON.parse(userDataString)
            let expirationTime = userData.expiresIn - new Date().getTime()

            if(expirationTime < 10000){
                context.dispatch(AUTO_LOGOUT_ACTION)
            } else{
            timer = setTimeout(() => {
                context.dispatch(AUTO_LOGOUT_ACTION)
            }, expirationTime)
        }
            context.commit(SET_USER_TOKEN_DATA_MUTATION, userData)
        }
    },

    async [AUTH_ACTION](context, payload) {
        let authData = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
        }

        let response = ''

        try {
            response = await axiosInstance.post(payload.url, authData)
        } catch (err) {
            let errorMessage = err
            console.log(response)
            throw errorMessage
        }

        let tokenString = context.dispatch(SET_USER_TOKEN_DATA_MUTATION, token)
            

        if (tokenString != '') {

            let expirationTime = + 10 * 1000

            timer = setTimeout(() => {
                context.dispatch(AUTO_LOGOUT_ACTION)
            }, expirationTime)

            // timer = setTimeout(() => {
            //     context.dispatch(SET_USER_TOKEN_DATA_MUTATION)
            // }, token)

            // let tokenData = {
            //     email: response.data.data.email,
            //     token: response.data.data.token,
            //     expiresIn: expirationTime,
            //     userId: response.data.data.uid,
            // }
        // console.log(tokenData)

            localStorage.setItem('userData', JSON.stringify(tokenString))
            // context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenString)
        }
    },
}

