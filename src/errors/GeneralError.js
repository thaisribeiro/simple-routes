export default class GeneralError extends Error {
  constructor (...args) {
    super(...args)
    this.name = 'GeneralError'
    this.errorCode = args[1] || 500
    this.errorMessage = 'general-error'
    this.message = args[0] || 'General Error'
    Error.captureStackTrace(this, GeneralError)
  }
}
