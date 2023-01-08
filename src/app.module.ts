import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { configuration } from './config/configuration'
import { PuzzleController } from './modules/puzzle/puzzle.controller'
import { PuzzleModule } from './modules/puzzle/puzzle.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `src/config/env/${process.env.NODE_ENV}.env`,
      load: [configuration],
      isGlobal: true,
    }),
    PuzzleModule,
  ],
  controllers: [AppController, PuzzleController],
  providers: [AppService],
})
export class AppModule {}
