const colors = require('colors/safe')
const moment = require('moment')

const printNameWithHour = (name) => {
  const hour = moment().format('LT')
  console.log(colors.rainbow(`Hola ${name}, son las ${hour}`))
}

printNameWithHour('Ivan')
