import GeneralError from '../errors/GeneralError'

module.exports = (model) => async (request, response, next) => {
  try {
    const result = await model.update({
      _id: request.params._id,
      $set: request.body
    })

    response.status(200).json({ status: 'sucesso', data: { result } })
  } catch (error) {
    next(new GeneralError(error.message))
  }
}
