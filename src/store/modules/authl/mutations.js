import { SET_AUTO_LOGOUT_MUTATION, SET_USER_TOKEN_DATA_MUTATION } from "@/store/storeconstants";

export default {
    [SET_USER_TOKEN_DATA_MUTATION](state, payload) {
        state.email = payload.email
        state.token = payload.token
        state.expiresIn = payload.expiresIn
        state.userId = payload.userId
        state.first_name= payload.first_name
        state.last_name = payload.last_name
        state.password= payload.password
        state.password_confirmation = payload.password_confirmation
        state.autoLogout = false
    },

    [SET_AUTO_LOGOUT_MUTATION](state) {
        state.autoLogout = true
    },
}