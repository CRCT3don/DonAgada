import axiosInstance from "@/services/axiosInstance"

export default {
    namespaced: true, 
    state() {
        return {
            email: "",
            password: "",
            token: '',
        }
    },

    mutations: {
        LOGIN(state, payload){
                    state.email = payload.email
                    state.password =  payload.password
                }
    },

    actions: {
        // signup({commit}) {
        //     return commit("SIGN_UP")
        // }
        // SIGN_UP_ACTION(context, payload) {
        logIn({commit}, payload) {
            return commit('LOGIN', {
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