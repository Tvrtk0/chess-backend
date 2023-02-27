export interface SetPuzzle {
  puzzleId: string
  rating: number
  played: boolean
  solved: boolean
}

export interface Set {
  setPuzzles: SetPuzzle[]
  solvingTime: number[]
  timesPlayed: number
}

export class CreateSetDto {
  rating: number
  size: number
  email: string
}
