import { writeFileSync } from 'fs'
import { argv } from 'yargs'
import { join } from 'path'
import { config } from 'dotenv'

const environment = argv.environment

const targetPath = join(__dirname, '../orm.config.json')

if (environment === 'local') config({ path: join(__dirname, '../.local.env') })

const environmentFileContent = {
  type: process.env.DB_TYPE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  entities: ['src/**/**/*.entity.{ts,js}'],
  migrations: ['src/database/migrations/*.{ts,js}'],
  cli: {
    migrationsDir: 'src/database/migrations'
  }
}
const data = JSON.stringify(environmentFileContent, null, 4)

try {
  writeFileSync(targetPath, data)
} catch (error) {
  console.log('There was an error: ', error)
}
