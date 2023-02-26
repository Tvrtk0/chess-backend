import { BadRequestException, Controller, Get, Param } from '@nestjs/common'
import { Puzzle } from './interface/puzzle.interface'
import { PuzzleService } from './puzzle.service'

@Controller('puzzle')
export class PuzzleController {
  constructor(private readonly puzzleService: PuzzleService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Puzzle> {
    return this.puzzleService.findOne(id)
  }

  @Get(':gt/:lt')
  async findOneRandom(@Param('gt') x: string, @Param('lt') y: string): Promise<Puzzle> {
    const gt = parseInt(x)
    const lt = parseInt(y)
    if (Number.isNaN(gt) || Number.isNaN(lt)) throw new BadRequestException()

    return this.puzzleService.findOneRandom(gt, lt)
  }
}
