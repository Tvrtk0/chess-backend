import { Controller, Get } from '@nestjs/common'
import { Puzzle } from './interface/puzzle.interface'
import { PuzzleService } from './puzzle.service'

@Controller('puzzle')
export class PuzzleController {
  constructor(private readonly puzzleService: PuzzleService) {}

  @Get()
  async findOne(): Promise<Puzzle[]> {
    return this.puzzleService.findOne(1000, 2000)
  }
}
