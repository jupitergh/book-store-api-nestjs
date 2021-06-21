import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ConfigConsts } from './config.consts'
import { configProviders } from './config.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === ConfigConsts.LOCAL ? ConfigConsts.LOCAL_ENV : undefined,
      load: [...configProviders]
    })
  ]
})
export class CConfigModule {}
