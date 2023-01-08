import * as mongoose from 'mongoose'

export const PuzzleSchema = new mongoose.Schema({
  puzzleId: String,
  fen: String,
  moves: String,
  rating: Number,
  ratingDeviation: Number,
  popularity: Number,
  nbPlays: Number,
  themes: String,
  gameUrl: String,
  openingFamily: String,
})
