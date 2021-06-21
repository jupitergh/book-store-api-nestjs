import { Module, ValidationPipeOptions } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Configuration } from './config/config.keys'
import { CConfigModule } from './config/config.module'
import { DatabaseModule } from './database/database.module'
import { BookModule } from './modules/book/book.module'
import { AuthorModule } from './modules/author/author.module'

@Module({
  imports: [
    CConfigModule,
    DatabaseModule,
    BookModule,
    AuthorModule
  ]

})
export class AppModule {
  static port: number
  static prefix: string
  static validationPipeOptions: ValidationPipeOptions

  constructor (private readonly configServ: ConfigService) {
    AppModule.port = this.configServ.get(Configuration.PORT)!
    AppModule.prefix = `${this.configServ.get(Configuration.API_PREFIX)}/${this.configServ.get(Configuration.API_VERSION)}`
    AppModule.validationPipeOptions = {
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      disableErrorMessages: false,
      validationError: {
        value: false
      },
      transform: true,
      transformOptions: {
        enableImplicitConversion: true
      }

    }
  }
}
