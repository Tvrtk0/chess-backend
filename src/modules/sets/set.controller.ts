import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { UserSetService } from '../userSets/userSet.service'
import { CreateSetDto, Set } from './interface/set.interface'
import { SetService } from './set.service'

@Controller('sets')
export class SetController {
  constructor(private readonly setService: SetService, private readonly userSetService: UserSetService) {}

  @Get(':id')
  async findAll(@Param('id') id: string): Promise<Set[]> {
    const setIds = await this.userSetService.getSets(id)
    const sets = await this.setService.findAll(setIds)
    return sets
  }

  @Post()
  async createSet(@Body() createSetDto: CreateSetDto) {
    const set = await this.setService.createSet(createSetDto)
    await this.userSetService.update({ puzzleSet: set, email: createSetDto.email })
    return set
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.setService.remove(id)
  }
}
