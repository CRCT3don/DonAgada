export default class User {
    constructor(first_name, last_name, email, password, password_confirmation, event_name, type, event_date, start_time, maximum_seats, location){
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.password = password
    this.password_confirmation = password_confirmation
    this.event_name = event_name
    this.type = type
    this.event_date = event_date
    this.start_time = start_time
    this.maximum_seats = maximum_seats
    this.location = location
    }
}
