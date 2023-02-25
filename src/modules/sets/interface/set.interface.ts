export interface SetPuzzle {
  puzzleId: string
  rating: number
  played: boolean
  solved: boolean
}

export interface SetPuzzles {
  id: number
  setPuzzles: SetPuzzle[]
}

export interface Set {
  solvingTime: string
  setPuzzles: SetPuzzles
}
