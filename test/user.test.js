import 'babel-polyfill'
import request from 'supertest'
import es from '../app'
import faker from 'faker/locale/pt_BR'

const app = es.express

describe('POST /user', () => {
  test('Should create the user and return success', (done) => {
    const user = {
      name: faker.name.findName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress()
    }

    return request(app)
      .post('/users')
      .send(user)
      .then((response) => {
        expect(response.statusCode).toBe(200)
        done()
      })
      .catch(error => done(error))
  })

  // test('Should create the user and return success', () => {
  //   const user = {
  //     name: faker.name,
  //     email: faker.email,
  //     address: faker.address
  //   }

  //   return request(app)
  //     .post('/users')
  //     .send(user)
  //     .expect(400)
  //     .then((response) => {
  //       expect(response.statusCode).toBe(400)
  //     })
  // })
})

// describe('GET /user', () => {
//   test('Should list the user and return success', () => {
//     return request(app)
//       .get('/users')
//       .expect(200)
//       .then((response) => {
//         expect(response.statusCode).toBe(200)
//       })
//   })
// })
