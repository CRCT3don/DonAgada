// import axios from "axios"

export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'))

    if (user && user.accessToken) {
        return {
            Authorization: 'Bearer' + user.token,
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
