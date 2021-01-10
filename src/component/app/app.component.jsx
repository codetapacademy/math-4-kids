import React, { useState } from 'react'
import { Operation } from '../operation'
import { Slider } from '../slider'
import { Title } from '../title'


const Math4Kids = () => {
  const [numberOfDigits, modifyNumberOfDigits] = useState(2)
  return (
    <div>
      <Title />
      <Operation
        nod={numberOfDigits}
      />
      <Slider
        min={1}
        max={5}
        value={numberOfDigits}
        change={modifyNumberOfDigits}
      />
    </div>
  )
}

export { Math4Kids }
