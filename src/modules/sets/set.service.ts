import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { Puzzle } from '../puzzle/interface/puzzle.interface'
import { CreateSetDto, Set, SetPuzzle } from './interface/set.interface'

@Injectable()
export class SetService {
  constructor(
    @InjectModel('sets') private readonly setModel: Model<Set>,
    @InjectModel('puzzles') private readonly puzzleModel: Model<Puzzle>
  ) {}

  async findAll(setIds: Types.ObjectId[]): Promise<Set[]> {
    const sets = await Promise.all(
      setIds.map(async id => {
        return (await this.setModel.findById(id)) as Set
      })
    )
    return sets
  }

  async remove(id: string) {
    return this.setModel.deleteOne({ _id: id })
  }

  async createSet(createSetDto: CreateSetDto): Promise<Set> {
    const { rating, size } = createSetDto
    const minRating = rating - 100
    const maxRating = rating + 100

    const puzzle = await this.puzzleModel.aggregate<Puzzle>([
      { $match: { rating: { $gt: minRating, $lt: maxRating } } },
      { $sample: { size: size } },
    ])

    const setPuzzles: SetPuzzle[] = puzzle
      .map(p => {
        return {
          played: false,
          puzzleId: p.puzzleId,
          rating: p.rating,
          solved: false,
        } as SetPuzzle
      })
      .sort((a, b) => a.rating - b.rating)

    const set = new this.setModel({
      setPuzzles: setPuzzles,
      solvingTime: [0],
      timesPlayed: 0,
    })

    set.save(async function (err) {
      if (err) {
        console.log(err)
        return null
      }
    })

    return set
  }
}
