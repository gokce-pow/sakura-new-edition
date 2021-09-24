const Customer = require('./customer')
const Handie = require('./handie')
const Request = require('./request')
const Offer = require('./offer')

class Photo {
  constructor(filename) {
    this.filename = filename
  }
}

module.exports = Photo

function signUpCustomer(name, email, address) {
  return new Customer(name, email, address)
}
function signUpHandie(name, email, jobType) {
  return new Handie(name, email, jobType)
}

// Signup section for Customer

const gokce = signUpCustomer('gokce', 'gokce@gmail.com', 'Berlin')
const emre = signUpCustomer('emre', 'emre@gmail.com', 'Berlin')
const ethan = signUpCustomer('ethan', 'ethan@gmail.com', 'New York')
const julie = signUpCustomer('julie', 'julie@gmail.com', 'Paris')

// Signup section for Handie

const eddie = signUpHandie('eddie', 'eddie@eddie.com', 'gardening')
const mildred = signUpHandie('mildred', 'mildred@mildred.com', 'painting')
const billie = signUpHandie('billie', 'bille@billie.com', 'decoration')
const lianne = signUpHandie('lianne', 'lianne@lianne.com', 'electrician')

// Adds new photo

const kitchen = new Photo('kitchen.jpeg')
const livingRoom = new Photo('living room.jpeg')
const garden = new Photo('garden.jpeg')
const house = new Photo('house.jpeg')

//  Creating a new request
// You can move it to makeReq func.
const decorationRequest = new Request('decoration', 'interior design', house)
const gardeningRequest = new Request('gardening', 'I want to plant a cherry blossom tree to my lovely garden', garden)
const electricityRequest = new Request('electrician', 'electricity connection for kitchen', kitchen)
const paintRequest = new Request('painting', 'I want my living room to be painted', livingRoom)

// Customer creates a new Request

gokce.makeRequest(decorationRequest)
emre.makeRequest(gardeningRequest)
ethan.makeRequest(electricityRequest)
julie.makeRequest(paintRequest)

// Adds new Offer
// You can move them to makeOffer
// You can remove the id just keep the request

const decorationOffer = new Offer(
  decorationRequest.id,
  '1000 €',
  '1 week',
  'Please check my profile to see my previous works'
)
const gardeningOffer = new Offer(
  gardeningRequest.id,
  '300 €',
  '3 days',
  'Please check my profile to see my previous works'
)
const electricityOffer = new Offer(
  electricityRequest.id,
  '250 €',
  '2 hours',
  'Please check my profile to see my previous works'
)
const paintOffer = new Offer(paintRequest.id, '400 €', '2 days', 'Please check my profile to see my previous works')

// Handie creates a new Offer

eddie.makeOffer(decorationOffer)
mildred.makeOffer(gardeningOffer)
billie.makeOffer(electricityOffer)
lianne.makeOffer(paintOffer)

console.log(eddie.jobs)
// eddie.jobs = 'anything';
console.log(mildred.jobs)
// mildred.jobs = 'anything';
console.log(billie.jobs)
// bille.jobs = 'anything';
console.log(lianne.jobs)
// lianne.jobs = 'anything';

// Rating section

console.log(gokce.rateHandie(3, eddie))
console.log(gokce.rateHandie(9, billie))
