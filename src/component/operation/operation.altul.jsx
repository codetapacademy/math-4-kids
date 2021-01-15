import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { sum } from '../../util'
import * as OS from './operation.style'

const Total = ({ total, reset }) => {
  const [inputValueList, setInputValueList] = useState({})
  const smartRef = useRef([])

  const handleChange = (e, cheitaMea) => {
    const { value, keyCode } = e.target
    console.log(value, cheitaMea, keyCode, e, e.keyCode < 58 && e.keyCode > 47 ? e.keyCode : '-0-')
    if (e.keyCode < 58 && e.keyCode > 47) {
      setInputValueList({
        ...inputValueList,
        [cheitaMea]: e.keyCode - 48
      })

      if (smartRef.current[cheitaMea + 1]) {
        smartRef.current[cheitaMea + 1].focus()
      }
    }
  }
  const scris = sum(Object
    .keys(inputValueList)
    .map(ol => +ol)
    .sort((a, b) => b - a)
    .map(oat => Math.pow(10, oat) * inputValueList[oat]))

  const checkResult = () => {
    console.log(total === scris)
    total === scris ? toast.success(`Correct, you got points!`) : toast.error(`Wrong answer, try again!`)
    console.log('We have access to the value of total: ', total, scris)
    console.log('I will return true or false at some point in the near future')
    reset()
    setInputValueList(Object.keys(inputValueList).reduce((a, c) => ({ ...a, [c]: 0}), {}))
    smartRef.current[0].focus()
  }

  return (
    <div >
      <OS.StyledOperationNumber>{String(total).split('').reverse().map((x, cheita) => (
        <OS.StyledOperationSpan key={cheita}>
          <OS.StyledOperationInput
            autoFocus={cheita === 0}
            onKeyDown={e => handleChange(e, cheita)}
            type="text"
            ref={el => smartRef.current[cheita] = el}
            value={inputValueList[cheita] || 0}
          />
        </OS.StyledOperationSpan>)
      )}</OS.StyledOperationNumber>
      <button onClick={checkResult}>Check result</button>
    </div>
  )
}

export { Total }
