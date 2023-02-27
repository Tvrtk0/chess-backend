import * as mongoose from 'mongoose'

export const SetSchema = new mongoose.Schema({
  setPuzzles: [
    {
      puzzleId: String,
      rating: Number,
      played: Boolean,
      solved: Boolean,
    },
  ],
  solvingTime: [Number],
  timesPlayed: Number,
})
