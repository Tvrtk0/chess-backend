import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { configuration } from './config/configuration'
import { PuzzleModule } from './modules/puzzle/puzzle.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `src/config/env/${process.env.NODE_ENV}.env`,
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_HOST),
    PuzzleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
