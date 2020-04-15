/* Construir, aplanar y pintar una pared
1)Construir
2)Aplanar
3)Pintar
*/

const muro = {
  estaConstruido: false,
  estaAplanado: false,
  estaPintado: false
}

/* funciones que reciben callbacks
function construir (muroAConstruir) {
  muroAConstruir.estaConstruido = true
  return muroAConstruir
}

function aplanar (muroAAplanar) {
  muroAAplanar.estaAplanado = true
  return muroAAplanar
}

function pintar (muroAPintar) {
  muroAPintar.estaPintado = true
  return muroAPintar
}

const muroConstruido = construir(muro)
const muroAplanado = aplanar(muroConstruido)
const muroPintado = pintar(muroAplanado)

console.log('muro: ', muroPintado)
*/

// funciones que ejecutan callbacks
function construir (muroAConstruir, callback) {
  setTimeout(() => {
    let error = null
    muroAConstruir.estaConstruido = true
    if (muroAConstruir.estaConstruido === false) {
      error = 'no se pudo construir el muro'
    }
    callback(error, muroAConstruir)
  }, 3000)
}

function aplanar (muroAAplanar, callback) {
  setTimeout(() => {
    muroAAplanar.estaAplanado = true
    const error = muroAAplanar.estaAplanado ? null : 'no se pudo aplanar el muro'
    callback(error, muroAAplanar)
  }, 3000)
}

function pintar (muroAPintar, callback) {
  setTimeout(() => {
    muroAPintar.estaPintado = true
    const error = muroAPintar.estaPintado ? null : 'no se pudo pintar el muro'
    callback(error, muroAPintar)
  }, 3000)
}

construir(muro, (errorDeConstruccion, muroConstruido) => {
  if (errorDeConstruccion) {
    console.error('errorDeConstruccion: ', errorDeConstruccion)
    return
  }
  aplanar(muroConstruido, (errorDeAplanado, muroAplanado) => {
    if (errorDeAplanado) {
      console.error('errorDeAplanado: ', errorDeAplanado)
      return
    }
    pintar(muroAplanado, (errorDePintado, muroPintado) => {
      if (errorDePintado) {
        console.error('errorDePintado: ', errorDePintado)
        return
      }
      console.log('muroPintado: ', muroPintado)
    })
  })
})

console.log('muro: ', muro)
