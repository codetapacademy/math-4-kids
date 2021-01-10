import React from 'react'

const getRandom = (numberOfDigits) => Math.floor(Math.random() * Math.pow(10, numberOfDigits))

const Operation = () => {
  const nr1 = getRandom(3)
  const nr2 = getRandom(2)
  const nr3 = getRandom(3)
  const nr4 = getRandom(1)
  return (
    <div>{nr1} ..... {nr2} hhhh {nr3} frumos {nr4}</div>
  )
}

export { Operation }
