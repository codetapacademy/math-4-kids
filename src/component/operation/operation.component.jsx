import React, { useEffect, useState } from 'react'
import * as OS from './operation.style'

import { getRandom, doOperation } from '../../util'
import { Total } from './operation.altul'
import { useSelector } from 'react-redux'

const Operation = ({ operation }) => {
  const [randomNumberList, setRandomNumberList] = useState([])
  const total = doOperation(randomNumberList, operation)
  const [nod, nio] = useSelector(({ user }) => ([
    user.children[user.selected].settings.level + 1,
    user.children[user.selected].settings.bonus + 2,
  ]))
  
  const getRandomNumberList = (operation = '+') => {
    const randomList = Array.from(
      { length: nio },
      () => {
        const n = getRandom(nod)
        return operation !== '÷' ? n : n === 0 ? 1 : n
      }
    )
    if (operation === '÷') {
      randomList[0] = randomList.reduce((a, c) => a * c, 1)
    }

    setRandomNumberList(randomList)
  }

  useEffect(() => {
    getRandomNumberList(operation)
  }, [nod, nio])

  console.log(total)
  return (
    <OS.StyledOperation>
      {/* This is the operation type, like: +, -, * or / */}
      <OS.StyledOperationType>{operation}</OS.StyledOperationType>

      {/* Here we display the numbers to be added, substracted, multiplied or divided */}
      {randomNumberList.map((randomNumber, key) => (
        <OS.StyledOperationNumber key={key} data-attr={randomNumber}>
          {String(randomNumber).split('').reverse().map((x, incaUnul) => <OS.StyledOperationSpan key={incaUnul}>{x}</OS.StyledOperationSpan>)}
        </OS.StyledOperationNumber>
      ))}

      {/* This is a visual divider between the numbers and the operation result */}
      <OS.StyledOperationDelimiter />

      {/* This is a hardcoded result, until we change it to the real one */}
      <Total
        total={total}
        reset={getRandomNumberList}
        operation={operation}
        nod={nod}
        nio={nio}
      />
      {/* <OS.StyledOperationNumber>{String(total).split('').reverse().map((x, cheita) => <OS.StyledOperationSpan>
        <OS.StyledOperationInput onChange={e => handleChange(e, cheita)} type="text"/>
      </OS.StyledOperationSpan>)}</OS.StyledOperationNumber> */}
      {/* <OS.StyledOperationNumber>{String(total).split('').reverse().map((x, sibmstsb) => <OS.StyledOperationSpan key={sibmstsb}>{x}</OS.StyledOperationSpan>)}</OS.StyledOperationNumber>
      <OS.StyledOperationDelimiter /> */}
    </OS.StyledOperation>
  )
}

export { Operation }
