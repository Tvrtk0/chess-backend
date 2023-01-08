import { Module } from '@nestjs/common'
import { PuzzleService } from './puzzle.service'

@Module({
  providers: [PuzzleService],
})
export class PuzzleModule {}
