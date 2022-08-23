
export default {
    signupRequest(state, user) {
        state.first_name = user.first_name
        state.last_name = user.last_name
        state.email = user.email
        state.isLogin = true
        state.password = user.password
        state.password_confirmation = user.password_confirmation
        state.token = null
        state.user =null	
    }
}