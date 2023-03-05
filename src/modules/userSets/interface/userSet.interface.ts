import * as mongoose from 'mongoose'
import { Set } from 'src/modules/sets/interface/set.interface'

export interface UserSet {
  userId: mongoose.Types.ObjectId
  puzzleSets: mongoose.Types.ObjectId[]
}

export interface CreateUserSetDto {
  puzzleSet: Set
  email: string
}
