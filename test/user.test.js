import 'babel-polyfill'
import request from 'supertest'
import es from '../app'

const app = es.express

describe('POST create User', () => {
  test('Should list the user and return success', (done) => {
    return request(app).get('/users')
      .expect(200)
      .then((response) => {
        expect(response.body).toBe(200)
        done()
      })
  })
})
