import * as mongoose from 'mongoose'

export interface UserSet {
  userId: mongoose.Types.ObjectId
  puzzleSets: mongoose.Types.ObjectId[]
}
