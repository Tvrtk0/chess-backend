import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { UserSetService } from '../userSets/userSet.service'
import { CreateSetDto, Set } from './interface/set.interface'
import { SetService } from './set.service'

@Controller('sets')
export class SetController {
  constructor(private readonly setService: SetService, private readonly userSetService: UserSetService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.setService.findOne(id)
  }

  @Get('all/:email')
  async findAll(@Param('email') email: string): Promise<Set[]> {
    const setIds = await this.userSetService.getSets(email)
    const sets = await this.setService.findAll(setIds)
    return sets
  }

  @Post()
  async createSet(@Body() createSetDto: CreateSetDto) {
    const set = await this.setService.createSet(createSetDto)
    await this.userSetService.update({ puzzleSet: set, email: createSetDto.email })
    return set
  }

  @Delete(':email/:id')
  async remove(@Param('email') email: string, @Param('id') id: string) {
    this.userSetService.removeSet(email, id)
    return this.setService.remove(id)
  }

  @Put()
  async update(@Body() set: Set) {
    return this.setService.update(set)
  }

  @Put('/reset/:setId')
  async resetSet(@Param('setId') setId: string) {
    return this.setService.resetSet(setId)
  }

  @Put('/:setId/:puzzleId')
  async updateSetPuzzle(
    @Param('setId') setId: string,
    @Param('puzzleId') puzzleId: string,
    @Body() puzzleDto: { solved: boolean }
  ) {
    return this.setService.updateSetPuzzle(setId, puzzleId, puzzleDto.solved)
  }
}
