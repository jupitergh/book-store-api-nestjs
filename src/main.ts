import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix(AppModule.prefix)
  await app.listen(AppModule.port)

  console.log('Server running on port:', AppModule.port)
  console.log('API prefix:', AppModule.prefix)
  console.log('NODE_ENV:', process.env.NODE_ENV)
}
bootstrap()
