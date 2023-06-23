import { expect } from 'chai'

describe('API calls test', () => {
  it('retrieves the users', () => {
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
        const users = data.data;
        expect(users).to.be.an('array')
    })
    .catch(error => console.error(error));
  })
  it('retrieves a particular user', () => {
    fetch('https://reqres.in/api/users/3')
    .then(response => response.json())
    .then(data => {
        const users = data.data;
        expect(users).to.be.an('object')
    })
    .catch(error => console.error(error));
  })
})
