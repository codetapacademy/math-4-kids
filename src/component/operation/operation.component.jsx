import React, { useEffect, useState } from 'react'
import * as OS from './operation.style'

import { getRandom, sum } from '../../util'
import { Total } from './operation.altul'

const Operation = ({ nod, nio }) => {
  const [randomNumberList, setRandomNumberList] = useState([])
  const total = sum(randomNumberList)
  
  const getRandomNumberList = () => setRandomNumberList(Array.from(
    { length: nio },
    () => getRandom(nod)
  ))

  useEffect(() => {
    getRandomNumberList()
  }, [])

  console.log(total)
  return (
    <OS.StyledOperation>
      {/* This is the operation type, like: +, -, * or / */}
      <OS.StyledOperationType>+</OS.StyledOperationType>

      {/* Here we display the numbers to be added, substracted, multiplied or divided */}
      {randomNumberList.map((randomNumber, key) => (
        <OS.StyledOperationNumber key={key} data-attr={randomNumber}>
          {String(randomNumber).split('').reverse().map((x, incaUnul) => <OS.StyledOperationSpan key={incaUnul}>{x}</OS.StyledOperationSpan>)}
        </OS.StyledOperationNumber>
      ))}

      {/* This is a visual divider between the numbers and the operation result */}
      <OS.StyledOperationDelimiter />

      {/* This is a hardcoded result, until we change it to the real one */}
      <Total total={total} reset={getRandomNumberList} nod={nod} nio={nio} />
      {/* <OS.StyledOperationNumber>{String(total).split('').reverse().map((x, cheita) => <OS.StyledOperationSpan>
        <OS.StyledOperationInput onChange={e => handleChange(e, cheita)} type="text"/>
      </OS.StyledOperationSpan>)}</OS.StyledOperationNumber> */}
      <OS.StyledOperationDelimiter />
      {/* <OS.StyledOperationNumber>{String(total).split('').reverse().map((x, sibmstsb) => <OS.StyledOperationSpan key={sibmstsb}>{x}</OS.StyledOperationSpan>)}</OS.StyledOperationNumber>
      <OS.StyledOperationDelimiter /> */}
    </OS.StyledOperation>
  )
}

export { Operation }
