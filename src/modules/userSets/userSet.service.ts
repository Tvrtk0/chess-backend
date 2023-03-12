import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateUserSetDto, UserSet } from './interface/userSet.interface'

@Injectable()
export class UserSetService {
  constructor(
    @InjectModel('userSets') private readonly userSetModel: Model<UserSet>,
    @InjectModel('users') private readonly userModel: Model<UserSet>
  ) {}

  public async getSets(id: string) {
    const userSets = await this.userSetModel.findOne({ userId: id })
    return userSets.puzzleSets
  }

  public async update(userSetDto: CreateUserSetDto) {
    const { puzzleSet, email } = userSetDto
    const user = await this.userModel.findOne({ email: email })
    const userSet = await this.userSetModel.findOneAndUpdate({ userId: user._id })

    userSet.puzzleSets.push(puzzleSet._id)
    userSet.save()
  }
}
