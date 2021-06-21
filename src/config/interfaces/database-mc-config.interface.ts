import { Configuration } from '../config.keys'

export class IDatabaseMCConfig {
  [Configuration.DB_HOST]: string
  [Configuration.DB_USERNAME]: string
  [Configuration.DB_PASSWORD]: string
  [Configuration.DB_PORT]: number
  [Configuration.DB_NAME]: string
}
