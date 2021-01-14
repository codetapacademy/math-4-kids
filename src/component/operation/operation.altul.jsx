import React, { useState } from 'react'
import { sum } from '../../util'
import * as OS from './operation.style'

const Total = ({ total }) => {
  const [inputValueList, setInputValueList] = useState({})

  const handleChange = (e, cheitaMea) => {
    const { value } = e.target
    console.log(value, cheitaMea)
    setInputValueList({
      ...inputValueList,
      [cheitaMea]: value
    })
  }
  const scris = sum(Object
    .keys(inputValueList)
    .map(ol => +ol)
    .sort((a, b) => b - a)
    .map(oat => Math.pow(10, oat) * inputValueList[oat]))

  const checkResult = () => {
    console.log()
    console.log('We have access to the value of total: ', total, scris)
    console.log('I will return true or false at some point in the near future')
  }

  return (
    <div style={{
      backgroundColor: total === scris ? 'green' : 'red'
    }}>
      <OS.StyledOperationNumber>{String(total).split('').reverse().map((x, cheita) => (
        <OS.StyledOperationSpan key={cheita}>
          <OS.StyledOperationInput onChange={e => handleChange(e, cheita)} type="text"/>
        </OS.StyledOperationSpan>)
      )}</OS.StyledOperationNumber>
      <button onClick={checkResult}>Check result</button>
    </div>
  )
}

export { Total }
