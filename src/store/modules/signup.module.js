import axiosInstance from "@/services/axiosInstance"

export default {
    namespaced: true, 
    state() {
        return {
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

    mutations: {
        SIGNUP_MUTATION(state, user) {
            state.first_name = user.userDatas.first_name
            state.last_name = user.userDatas.last_name
            state.email = user.userDatas.email
            state.isLogin = true
            state.password = user.userDatas.password
            state.password_confirmation = user.userDatas.password_confirmation
            state.token = null
            state.user = null	
        }
    },

    actions: {
        signUp({commit}, {user}) {
            commit('SIGNUP_MUTATION', { user })

            console.log(user)

            let result = axiosInstance.post('/api/register', user)
            .request(result)
            .then((response) => {
                console.log(response)
                this.$router('/userposst')
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}