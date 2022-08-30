import { createStore } from "vuex"
import { auth } from "./modules/auth.module"
// import signupModule from "./modules/signup.module"


const store = createStore({
    modules: { 
        // signupModule,
        auth,
    },
}) 

export default store