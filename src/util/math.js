export const getRandom = numberOfDigits => Math.floor(Math.random() * Math.pow(10, numberOfDigits))

export const doOperation = (list, operation) => {
  return list.reduce((acumulator, curent) => {
    switch(operation) {
      case '+':
        return list.reduce((acumulator, curent) => acumulator + curent, 0)

      case '-':
        return list.reduce((acumulator, curent) => acumulator - curent)

      case '×':
        return list.reduce((acumulator, curent) => acumulator * curent, 1)

      case '÷':
        return list.reduce((acumulator, curent) => acumulator / curent)

      default:
        return acumulator + curent
    }
  }, 0)
}
