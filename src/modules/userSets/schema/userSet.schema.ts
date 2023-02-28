import * as mongoose from 'mongoose'

export const UserSetSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  puzzleSets: [mongoose.Types.ObjectId],
})
