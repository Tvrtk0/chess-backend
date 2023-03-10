import * as mongoose from 'mongoose'

export interface User {
  _id: mongoose.Types.ObjectId
  name: string
  email: string
  image: string
}
