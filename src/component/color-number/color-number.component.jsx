import React from 'react'

import { StyledOperationDigit } from './color-number.style'

const colorList = ['#36b6f5', '#882ff6', '#f99d06', '#f905db', '#35d460']

const ColorNumber = ({ number }) => {
  return String(number)
    .split('')
    .reverse()
    .map((m, cheie) => <StyledOperationDigit key={cheie} color={colorList[cheie]}>{m}</StyledOperationDigit>)
    .reverse()
}

export { ColorNumber }
