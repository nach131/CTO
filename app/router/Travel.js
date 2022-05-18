require('../../mongo')

const express = require('express')
const router = express.Router()

const Travel = require('../../models/Travel')

function randomId (prefix) {
  prefix = prefix || '';
  return prefix + ((++UUID).toString());
}

// all travel
router.get('/', (req, res) => {
  const limit = parseInt(req.query.limit) || 10
  const page = parseInt(req.query.page) || 1

  let transport = { 'transport': 'Transport', 'transport': req.query.Transport || null }
  let departure = { 'travel.departure': 'Departure', 'travel.departure.date': req.query.Bus || null }
  let arrival = { 'travel.arrival': 'Arrival', 'travel.arrival.date': req.query.Train || null }

  let departure_c = { 'travel.departure': 'CityDeparture', 'travel.departure.city': req.query.Bus || null }
  let arrival_c = { 'travel.arrival': 'CityArrival', 'travel.arrival.city': req.query.Train || null }

  if (!req.query.Transport) { transport = {} }
  if (!req.query.Departure) { date = {} }
  if (!req.query.arrival) { train = {} }


  const travel = await BoredApe.paginate(

    {
      $and: [
        transport,
        departure,
        arrival,
        departure_c,
        arrival_c
      ]
    },
    { limit, page })

  res.json(travel)
})


router.post('/', (req, res) => {
  const travel = req.body

  const newTavel = new Travel({
    transport: travel.transport,
    travel: {
      id_t: randomId(travel.transport),
      seat: travel.seat,
      daparture: {
        date: travel.date,
        city: travel.city,
        location: travel.location
      },
      arrival: {
        date: travel.date,
        city: travel.city,
        location: travel.location
      }
    }
  })

  newTavel.save().then(savedTravel => {
    res.json(savedTravel)
  })
})

module.exports = router


