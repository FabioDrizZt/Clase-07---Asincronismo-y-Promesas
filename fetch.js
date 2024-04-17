fetch('https://apis.datos.gob.ar/georef/api/provincias')
  .then((response) => response.json())
  .then((datos) => {
    console.log(datos)
  }).catch((error) => {
    console.log(error)
  })
