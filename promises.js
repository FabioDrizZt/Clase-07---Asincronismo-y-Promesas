const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    //generar un nro aleatorio
    const numero = Math.random()
    if (numero >= 0.5) {
      resolve('Exito !')
    } else {
      reject(new Error('Error !'))
    }
  }, 1000)
})

miPromesa
  .then((data) => {
    // Cuando tenemos exito
    console.log(data)
  })
  .catch((err) => {
    // Cuando tenemos NO exito
    console.log('la operacion fallo.')
  })
  .finally(() => {
    // Se ejecuta siempre sea que falle o no
    console.log('termino la operacion')
  })
