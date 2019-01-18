import Joi from 'joi'
import { options, MongoOID } from './validations'

export default {
  create: {
    options,
    body: {
      name: Joi.string().required(),
      username: Joi.string().required(),
      email: Joi.string().required(),
      address: Joi.string()
    }
  },
  findById: {
    options,
    params: {
      _id: MongoOID.required()
    }
  },
  remove: {
    options,
    params: {
      _id: MongoOID.required()
    }
  },
  update: {
    options,
    params: {
      _id: MongoOID.required()
    }
  }
}
