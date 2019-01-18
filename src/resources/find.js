import GeneralError from '../errors/GeneralError'

module.exports = (model) => async (request, response, next) => {
  try {
    const result = await model.find()

    response.status(200).json({ status: 'success', data: { result } })
  } catch (error) {
    next(new GeneralError(error.message))
  }
}
