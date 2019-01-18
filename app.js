import dotenv from 'dotenv'
import ExpressApplication from 'express-application'
import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

dotenv.config()

const app = new ExpressApplication({
  name: 'simple-routes',
  services: {
    container: ['./src/services']
  },
  port: process.env.PORT || 8081,
  environment: process.env.NODE_ENV || 'development',
  serverless: (process.env.SERVERLESS === 'true'),
  bodyParser: { json: { limit: '20mb' } }
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
mongoose.set('debug', process.env.NODE_ENV === 'development')
mongoosePaginate.paginate.options = { lean: true }

app.init()
app.errorHandling(['GeneralError'])

export default app
