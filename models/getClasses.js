const {
  ReasonPhrases,
  StatusCodes,
} = require('http-status-codes')

const data = require('./data.json')
const getClasses = (res) => {
  try {
    const classes = data
    return res.status(StatusCodes.OK).json(classes)
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND)
  }
}


module.exports = getClasses;