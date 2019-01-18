import Controller from '../controller/Controller'

export default class Routes {
  constructor (router, routes, model) {
    this.controller = new Controller(model)

    return this.createRoutes(router, routes)
  }

  createRoutes (router, routes) {
    return routes.map((route) => {
      return (route.middleware)
        ? router[route.method](route.path, route.middleware,
          this.controller[route.action])
        : router[route.method](route.path, this.controller[route.action])
    })
  }
}
