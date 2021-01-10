import React from 'react'
import { StyledOperation, StyledOperationDelimiter, StyledOperationDigit, StyledOperationNumber, StyledOperationType } from './operation.style'

const getRandom = (numberOfDigits) => Math.floor(Math.random() * Math.pow(10, numberOfDigits))

const colorList = ['#36b6f5', '#882ff6', '#f99d06', '#f905db', '#35d460']

const ColorNumber = ({ number }) => {
  return String(number)
    .split('')
    .reverse()
    .map((m, cheie) => <StyledOperationDigit color={colorList[cheie]}>{m}</StyledOperationDigit>)
    .reverse()
}


const Operation = () => {
  const randomNumberList = Array.from(
    { length: 5 },
    () => getRandom(5)
  )

  return (
    <StyledOperation>
      <StyledOperationType>+</StyledOperationType>
      {randomNumberList.map(rn => <StyledOperationNumber>
        <ColorNumber number={rn} />
      </StyledOperationNumber>)}
      <StyledOperationDelimiter />
      <StyledOperationNumber>35</StyledOperationNumber>
    </StyledOperation>
  )
}

export { Operation }
