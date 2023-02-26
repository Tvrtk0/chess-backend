import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Puzzle } from './interface/puzzle.interface'

@Injectable()
export class PuzzleService {
  constructor(@InjectModel('puzzles') private readonly puzzleModel: Model<Puzzle>) {}

  async findOne(id: string) {
    return await this.puzzleModel.findOne({ puzzleId: id })
  }

  async findOneRandom(gt: number, lt: number): Promise<Puzzle> {
    const p = await this.puzzleModel.aggregate([{ $match: { rating: { $gt: gt, $lt: lt } } }, { $sample: { size: 1 } }])
    return p[0]
  }
}
