import 'babel-polyfill'
import request from 'supertest'
import es from '../app'

const app = es.express

describe('Test root the path', () => {
  test('It should response the GET method', (done) => {
    return request(app).get('/users')
      .expect(200)
      .then((response) => {
        expect(response.body).toBe(200)
        done()
      })
  })
})
