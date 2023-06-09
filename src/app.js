require('dotenv').config()
const express = require("express");
const handleResponses = require("./utils/handleResponses");
const db = require('./utils/database' );
const initModels = require('./models/initModels.models')
const config = require('../config')

const usersRouters = require('./routers/users.router')
const authRouters = require('./routers/auth.router')
const petRouters = require('./routers/pets.router')

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  handleResponses.success({
    res,
    status: 200,
    message: "Server initialized successfully",
    data: {
      users: `${config.api.host}/api/v1/users`,
      pets: `${config.api.host}/api/v1/pets`,
      vaccines: `${config.api.host}/api/v1/vaccines`
    },
  });
});


db.authenticate() // Muestra en consola de manera informativa si la coneccion se hizo de manera correcta
.then(() => {
  console.log("Connection has been established successfully");
})
.catch( err => {
  console.log(err)
})

db.sync() // sincroniza nuesta base de datos con los modelos que tenemos definidos
.then(
  console.log('the database has been synced')
)
.catch( err => {
  console.log(err)
})

initModels()

// ROUTERS
app.use('/api/v1/users', usersRouters)
app.use('/api/v1/auth', authRouters)
app.use('/api/v1/pets', petRouters)

app.use("*", ( req, res) => {
   handleResponses.error( {
    res, 
    status: 404,
    message: "url not found",
   })
})


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server listening on port 8000");
});
