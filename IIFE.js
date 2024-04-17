//Immediatly Invoked Function Expression

;(async () => {
  const response = await fetch(
    'https://apis.datos.gob.ar/georef/api/provincias'
  )
  const data = await response.json()
  const provincias = data.provincias
  console.log(provincias)
})()
