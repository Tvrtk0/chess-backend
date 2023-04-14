import * as mongoose from 'mongoose'

export const SetSchema = new mongoose.Schema({
  setPuzzles: [
    {
      puzzleId: String,
      rating: Number,
      themes: String,
      played: Boolean,
      solved: Boolean,
    },
  ],
  solvingTime: [Number],
  timesPlayed: Number,
}).set('timestamps', true)
