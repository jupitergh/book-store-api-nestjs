import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Configuration } from './config/config.keys'
import { CConfigModule } from './config/config.module'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [
    CConfigModule,
    DatabaseModule
  ]

})
export class AppModule {
  static port: number
  static prefix: string

  constructor (private readonly configServ: ConfigService) {
    AppModule.port = this.configServ.get(Configuration.PORT)!
    AppModule.prefix = `${this.configServ.get(Configuration.API_PREFIX)}/${this.configServ.get(Configuration.API_VERSION)}`
  }
}
