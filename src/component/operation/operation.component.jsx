import React from 'react'
import { StyledOperation, StyledOperationDelimiter, StyledOperationNumber, StyledOperationType } from './operation.style'

const getRandom = (numberOfDigits) => Math.floor(Math.random() * Math.pow(10, numberOfDigits))

const Operation = () => {
  const randomNumberList = Array.from(
    { length: 5 },
    () => getRandom(3)
  )

  return (
    <StyledOperation>
      <StyledOperationType>+</StyledOperationType>
      {randomNumberList.map(rn => <StyledOperationNumber>{rn}</StyledOperationNumber> )}
      <StyledOperationDelimiter />
      <StyledOperationNumber>35</StyledOperationNumber>
    </StyledOperation>
  )
}

export { Operation }
