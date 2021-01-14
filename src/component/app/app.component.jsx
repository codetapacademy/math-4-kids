import React, { useState } from 'react'
import { Operation } from '../operation'
import { Slider } from '../slider'
import { Title } from '../title'


const Math4Kids = () => {
  const [numberOfDigits, modifyNumberOfDigits] = useState(2)
  const [numbersInOperation, modifyNumbersInOperation] = useState(3)
  return (
    <div>
      <Title />
      {/* <Slider
        min={1}
        max={6}
        value={numberOfDigits}
        change={modifyNumberOfDigits}
      />
      <Slider
        min={2}
        max={7}
        value={numbersInOperation}
        change={modifyNumbersInOperation}
      /> */}
      <Operation
        nod={numberOfDigits}
        nio={numbersInOperation}
      />
    </div>
  )
}

export { Math4Kids }
