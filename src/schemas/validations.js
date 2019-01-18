import Joi from 'joi'

export const options = {
  allowUnknownHeaders: false,
  allowUnknownBody: false,
  allowUnknownQuery: false,
  allowUnknownParams: false,
  allowUnknownCookies: false
}

export const MongoOID = Joi.string().regex(/^[0-9a-fA-F]{24}$/)
