// import axios from "axios"

export default function authHeader() {
    // let user = localStorage.getItem('user').toString()
    let user = JSON.parse(localStorage.getItem('user'))

    if (user) {
        return {
            // Authorization: `Bearer ${user}`
            Authorization: "Bearer " + user
        }
    } else {
        return {}
    }
}


// // FOR NODE.JS EXPRESS BACKEND USE BELOW
// export default function authHeader() {
//     let user = JSON.parse(localStorage.getItem('user'))
//     if (user && user.accessToken) {
//         return {
//             'x-access-token': + user.token
//         }
//     } else {
//         return {}
//     }
// }
