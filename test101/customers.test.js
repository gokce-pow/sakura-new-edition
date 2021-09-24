const request = require('supertest')
const app = require('../src/app')

describe('Customers endpoints', () => {
  it('post request to/customers should create a new customer', async () => {
    const customerToCreate = {
      name: 'SomeName',
      email: `SomeEmail${Date.now()}`,
      password: 'SomePassword',
      address: 'SomeAddress',
    }

    const createdCustomer = (await request(app).post('/customers/signup').send(customerToCreate)).body
    expect(createdCustomer.name).toBe(customerToCreate.name)
    expect(createdCustomer.email).toBe(customerToCreate.email)
    expect(createdCustomer.password).toBe(customerToCreate.password)
    expect(createdCustomer.address).toBe(customerToCreate.address)
  })

  it('get /customers/:customerId should list customer info', async () => {
    const customerInfo = (await request(app).get('/customers/614258a30d8040099e4877c4')).body
    expect(customerInfo).not.toBe(undefined)
    expect(customerInfo._id).toBe('614258a30d8040099e4877c4')
  })

  //   it('post /customer/login should send ')
})

/*  it('customers should be able to make requests', async () => {
    // create a customer
    const customerWithRequest = (await (await request(app).post('/customers')).send({
        name: 'RequestOwnerCustomer',
        email: 'RequestOwnerCustomersEmail' + Date.now(),
        password: 'RequestOwnerCustomersPassword',
        address: 'RequestOwnerCustomersAddress'
    })).body
      console.log('-----customerWithRequest---', customerWithRequest)

      // create a request
    const requested = (await (await request(app).post('/customers/:customerId')).send({ filename: 'SomeIdNumber'}).body
    console.log('-----requestId----', requested)

        // add the request to that customer
      await request(app).post(`/customers/${customerWithRequest._id}``)
      */
