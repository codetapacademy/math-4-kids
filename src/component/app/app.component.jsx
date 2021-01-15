import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Operation } from '../operation'
import { Slider } from '../slider'
import { Title } from '../title'
import { Status } from '../status'

const Math4Kids = () => {
  const [numberOfDigits, modifyNumberOfDigits] = useState(1)
  const [numbersInOperation, modifyNumbersInOperation] = useState(0)
  return (
    <div>
      <Title />
      <Status />
      <Operation
        nod={numberOfDigits + 1}
        nio={numbersInOperation + 2}
      />
      <Slider
        value={numberOfDigits}
        list={['starter', 'easy', 'junior', 'normal', 'pro', 'expert', 'guru']}
        label={`Difficulty (${10 * (numberOfDigits + 1)} points)`}
        change={modifyNumberOfDigits}
      />
      <Slider
        value={numbersInOperation}
        list={['x1', 'x2']}
        label="Bonus Multiplier"
        change={modifyNumbersInOperation}
      />
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </div>
  )
}

export { Math4Kids }
