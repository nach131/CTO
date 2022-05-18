const mongoose = require('mongoose')

// const connectioString = process.env.MONGO_DB_URI
const connectioString = 'mongodb+srv://nacho42Barcelona"NO_VA_A_NINGUN_BD"/travel?retryWrites=true&w=majority'

// conexion mongodb
mongoose.connect(connectioString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => {
    console.log('Esta conectado')
  }).catch(err => {
    console.log(err)
  })
