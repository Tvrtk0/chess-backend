import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from '../user/schema/user.schema'
import { UserSetSchema } from './schema/userSet.schema'
import { UserSetService } from './userSet.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'userSets', schema: UserSetSchema },
      { name: 'users', schema: UserSchema },
    ]),
  ],
  controllers: [],
  providers: [UserSetService],
  exports: [UserSetService],
})
export class UserSetModule {}
