const dividir = (a, b) => {
  if (b === 0) {
    throw new Error('No se puede dividir por cero')
  }
  return a / b
}

try {
  const resultado = dividir(1, 1)
  console.log(resultado)
} catch (error) {
  console.log({ error })
}

console.log(Math.floor('cinco, nueve'))
