import User from '../collections/User'
import configRoutes from '../../scripts/routes.config'
import userSchema from '../schemas/user'
import Routes from '../handlers/Routes'

const routes = configRoutes('users', userSchema)

export default class MovieService {
  /**
   * Constructor
   * @param {*} router  - express
   */
  constructor (router) {
    this.routes = new Routes(router, routes, User)
  }
}
