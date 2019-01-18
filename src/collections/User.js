import mongoose from 'mongoose'
import timestamp from 'mongoose-timestamp'
import softDelete from 'mongoose-soft'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: { type: String },
  username: { type: String, unique: true },
  email: { type: String },
  address: { type: String }
})

UserSchema.plugin(timestamp, {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})

UserSchema.plugin(softDelete())

export default mongoose.model('User', UserSchema)
