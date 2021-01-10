import React from 'react'
import * as OS from './operation.style'

import { getRandom } from '../../util'
import { ColorNumber } from '../color-number'

const Operation = ({ nod, nio }) => {
  const randomNumberList = Array.from(
    { length: nio },
    () => getRandom(nod)
  )

  return (
    <OS.StyledOperation>
      {/* This is the operation type, like: +, -, * or / */}
      <OS.StyledOperationType>+</OS.StyledOperationType>

      {/* Here we display the numbers to be added, substracted, multiplied or divided */}
      {randomNumberList.map((randomNumber, key) => (
        <OS.StyledOperationNumber key={key}>
          <ColorNumber number={randomNumber} />
        </OS.StyledOperationNumber>
      ))}

      {/* This is a visual divider between the numbers and the operation result */}
      <OS.StyledOperationDelimiter />

      {/* This is a hardcoded result, until we change it to the real one */}
      <OS.StyledOperationNumber>35</OS.StyledOperationNumber>
    </OS.StyledOperation>
  )
}

export { Operation }
