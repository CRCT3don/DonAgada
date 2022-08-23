import axiosInstance from "@/services/axiosInstance"

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
        SIGN_UP(state, payload){
                    state.first_name = payload.first_name
                    state.last_name = payload.last_name
                    state.email = payload.email
                    state.password =  payload.password
                    state.password_confirmation = payload.password_confirmation  
                }
    },

    actions: {
        // signup({commit}) {
        //     return commit("SIGN_UP")
        // }
        // SIGN_UP_ACTION(context, payload) {
        signUp({commit}, payload) {
            return commit('SIGN_UP', {
                ...payload,
                method: "POST",
                url: `/api/register`,
                // headers: {'Content-Type' : 'application/json', Authorization: 'Bearer'}
            },

        axiosInstance
        .request()
        .then((response) => {
          console.log(response);
        //   this.isSignUp = true;
        //   this.$router.replace("/userpost");
        })
        .catch((error) => {
          console.error(error.response.data.errors);
        //   this.errorCode = true
        //   this.errorPassword = error.response.data.errors
        //   this.errorPassword = error.response.data.errors.password
        }))
    },
    }
}