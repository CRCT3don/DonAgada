
  
export default {

    
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

}

