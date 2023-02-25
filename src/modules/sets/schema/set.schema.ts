import * as mongoose from 'mongoose'

export const SetSchema = new mongoose.Schema({
  solvingTime: String,
  setPuzzles: {
    id: Number,
    setPuzzles: [
      {
        puzzleId: String,
        rating: Number,
        played: Boolean,
        solved: Boolean,
      },
    ],
  },
})
