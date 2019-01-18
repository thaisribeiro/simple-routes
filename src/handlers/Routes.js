import Controller from './Controller'

export default class Routes {
  /**
   * Starts creating the controller and service routes
   * @param {Object} router  - expŕess
   * @param {Object} routes - object routes
   * @param {Object} model - collection
   */
  constructor (router, routes, model) {
    this.controller = new Controller(model)

    return this.createRoutes(router, routes)
  }

  /**
   * Create the routes
   * @param {Object} router - express
   * @param {Object} routes - object routes
   */
  createRoutes (router, routes) {
    return routes.map((route) => {
      return (route.middleware)
        ? router[route.method](route.path, route.middleware,
          this.controller[route.action])
        : router[route.method](route.path, this.controller[route.action])
    })
  }
}
