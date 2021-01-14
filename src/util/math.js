export const getRandom = numberOfDigits => Math.floor(Math.random() * Math.pow(10, numberOfDigits))
export const sum = list => list.reduce((acumulator, curent) => acumulator + curent, 0)
