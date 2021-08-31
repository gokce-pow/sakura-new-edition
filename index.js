class JobPoster {                           //will add a parent class as "User" for the mutual properties and functions
    constructor(name, email) {
        this.name = name
        this.email = email
        this.address = ''
    }    
        greet() {
            console.log(`Hello ${this.name}!`)
    
        }
        
        makeRequest (jobType, details, photo) {
            return new Request (jobType, details, photo)
        }  

        updateAddress(address) {
            this.address = address
        } 
    
}

class Handyworker {
    constructor(name, email, jobType){
        this.name = name
        this.email = email
        this.jobType = jobType
        this.address = ''

    }
    greet() {
        console.log(`Hello ${this.name}!`)

    }

    makeOffer(id, price, period, description) {
        return new Offer(id, price, period, description)
    }

    updateAddress(address) {
        this.address = address
    }
}

function signUp(name, email) {
    return new User(name, email)
}

class Request {
    constructor(jobType, details) {
        this.jobType = jobType
        this.details = details
        this.photo = []
        this.id = Date.now()
    }
    addPhoto(photo) {
        this.photo.push(photo)
    }

}

class Offer {
    constructor(id, price, period, description){
        this.id = id
        this.price = price
        this.period = period
        this.description = description
    }
}

class Photo {
    constructor(filename) {
        this.filename = filename
    }
}

const ethan = signUp('ethan', 'ethan@gmail.com')
const julie = signUp('julie', 'julie@gmail.com', 'painter')

const photo = new Photo('kitchen.jpeg')
ethan.addPhoto(photo)



