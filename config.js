require('dotenv').config()

const configs = {
  api: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || "http://localhost:3000",
    nodeEnv: process.env.NODE_ENV || "development",
    secretkey : process.env.JWT_SECRET
  },
  db: {
    development: {
      dialect: "postgres",
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME, // fun_animal
      define: {
        timestamps: true, //? nos obliga a que todas las tablas tengan la propiedad created_at y updated_at
        underscored: true, //? pasa de lowerCamelCase a snake_case
        underscoredAll: true,
      }
    },
    production: {
      dialect: "postgres",
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      define: {
        timestamps: true, //? nos obliga a que todas las tablas tengan la propiedad created_at y updated_at
        underscored: true, //? pasa de lowerCamelCase a snake_case
        underscoredAll: true,
      },
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        }
      }
    },
    testing: {},
  },
};

module.exports = configs;