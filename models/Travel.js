const { model, Schema } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const travelSchema = new Schema({

  transport: String,
  travel: {
    id_t: String,
    seat: String,
    daparture: {
      date: Date,
      city: String,
      location: String
    },
    arrival: {
      date: Date,
      city: String,
      location: String
    }
  }
})

travelSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

travelSchema.plugin(mongoosePaginate)

const Travel = model('Travel', travelSchema)

module.exports = Travel
