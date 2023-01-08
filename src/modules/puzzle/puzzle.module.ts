import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PuzzleController } from './puzzle.controller'
import { PuzzleService } from './puzzle.service'
import { PuzzleSchema } from './schema/puzzle.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'puzzles', schema: PuzzleSchema }])],
  controllers: [PuzzleController],
  providers: [PuzzleService],
})
export class PuzzleModule {}
