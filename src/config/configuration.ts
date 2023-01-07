export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 3001,
  mongoDB: {
    URI: process.env.DATABASE_HOST,
    name: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PW,
  },
})
