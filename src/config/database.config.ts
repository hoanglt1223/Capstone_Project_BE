export default (): Record<string, any> => ({
  databaseConnection: process.env.DATABASE_CONNECTION || 'posgres',
  databaseHost: process.env.DATABASE_HOST,
  databasePort: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  databaseUsername: process.env.DATABASE_USERNAME,
  databasePassword: process.env.DATABASE_PASSWORD,
  databaseName: process.env.DATABASE_NAME,
})
