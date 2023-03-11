import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PuzzleSchema } from '../puzzle/schema/puzzle.schema'
import { UserSetModule } from '../userSets/userSet.module'
import { SetSchema } from './schema/set.schema'
import { SetController } from './set.controller'
import { SetService } from './set.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'sets', schema: SetSchema },
      { name: 'puzzles', schema: PuzzleSchema },
    ]),
    UserSetModule,
  ],
  controllers: [SetController],
  providers: [SetService],
})
export class SetModule {}
