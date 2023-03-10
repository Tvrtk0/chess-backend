import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get<ConfigService>(ConfigService)
  const port = config.get('port')

  app.enableCors()
  app.setGlobalPrefix('/api')

  await app.listen(Number(port))
}
bootstrap()
