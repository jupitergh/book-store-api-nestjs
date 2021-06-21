import { Configuration } from '../config.keys'

export class IServerConfig {
  [Configuration.PORT]: number
  [Configuration.API_PREFIX]: string
  [Configuration.API_VERSION]: string
}
