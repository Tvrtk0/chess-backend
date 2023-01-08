export interface Puzzle {
  puzzleId: string
  fen: string
  moves: string
  rating: number
  ratingDeviation: number
  popularity: number
  nbPlays: number
  themes: string
  gameUrl: string
  openingFamily?: string
}
