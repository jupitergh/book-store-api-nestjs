import { Configuration } from './config.keys'
import { IDatabaseMCConfig, IServerConfig } from './interfaces'

export const configProviders = [
  (): IServerConfig => ({
    [Configuration.PORT]: Number(process.env.PORT),
    [Configuration.API_PREFIX]: process.env.PORT!,
    [Configuration.API_VERSION]: process.env.PORT!
  }),

  (): IDatabaseMCConfig => ({
    [Configuration.DB_HOST]: process.env.DB_HOST!,
    [Configuration.DB_USERNAME]: process.env.DB_USERNAME!,
    [Configuration.DB_PASSWORD]: process.env.DB_PASSWORD!,
    [Configuration.DB_NAME]: process.env.DB_NAME!,
    [Configuration.DB_PORT]: Number(process.env.DB_PORT)

  })

]
