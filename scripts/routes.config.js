import validate from 'express-validation/lib'

export default (path, middleware) => [
  {
    method: 'get',
    path: `/${path}`,
    action: 'find'
  },
  {
    method: 'get',
    path: `/${path}/:_id`,
    action: 'findById',
    middleware: validate(middleware.findById)
  },
  {
    method: 'post',
    path: `/${path}`,
    action: 'create',
    middleware: validate(middleware.create)
  },
  {
    method: 'put',
    path: `/${path}/:_id`,
    action: 'update',
    middleware: validate(middleware.update)
  },
  {
    method: 'delete',
    path: `/${path}/:_id`,
    action: 'remove',
    middleware: validate(middleware.remove)
  }
]
