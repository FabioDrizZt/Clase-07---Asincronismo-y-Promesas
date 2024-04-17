const operation = (nro1, nro2, callback) => {
  return setTimeout(() => {
    callback(nro1, nro2)
  }, 0)
}

operation(1, 3, (a, b) => console.log(a + b))
operation(1, 3, (a, b) => console.log(a * b))
operation(1, 3, (a, b) => console.log(a - b))
console.log(3 + 3)
