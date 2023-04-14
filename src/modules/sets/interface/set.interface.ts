import mongoose from 'mongoose'

export interface SetPuzzle {
  puzzleId: string
  rating: number
  themes: string
  played: boolean
  solved: boolean
}

export interface Set {
  setPuzzles: SetPuzzle[]
  solvingTime: number[]
  timesPlayed: number
  _id: mongoose.Types.ObjectId
}

export class CreateSetDto {
  rating: number
  size: number
  email: string
}
