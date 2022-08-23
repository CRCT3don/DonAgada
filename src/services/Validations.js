export default class Validations {
    static checkEmail(email) {
        if  (/^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email,
            )
        ) {
            return true
        }
        return false
    }

    static minLenght(name, minLenght) {
        // if ( name && name.length ? name.length : 0 < minLenght) {
        if ( name.length < minLenght) {
            return false
        }
        return true
    }
}