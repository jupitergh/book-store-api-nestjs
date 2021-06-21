import { Configuration } from './../config/config.keys'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import * as path from 'path'
import { IDatabaseMCConfig } from 'src/config/interfaces'
import { ConfigConsts } from 'src/config/config.consts'

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (config: ConfigService<IDatabaseMCConfig>): Promise<TypeOrmModuleOptions> => {
      const res: TypeOrmModuleOptions = {
        type: ConfigConsts.DB_TYPE,
        host: config.get(Configuration.DB_HOST),
        database: config.get(Configuration.DB_NAME),
        username: config.get(Configuration.DB_USERNAME),
        password: config.get(Configuration.DB_PASSWORD),
        port: config.get(Configuration.DB_PORT),
        entities: [path.join(__dirname, '/../**/*.entity.{ts,js}')],
        migrations: [path.join(__dirname, '/migrations/*.{ts,js}')],
        namingStrategy: new SnakeNamingStrategy()
      }
      return res
    },
    inject: [ConfigService]
  })
]
