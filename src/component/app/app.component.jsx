import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Operation } from '../operation'
import { Slider } from '../slider'
import { Title } from '../title'

const Math4Kids = () => {
  const [numberOfDigits, modifyNumberOfDigits] = useState(2)
  const [numbersInOperation, modifyNumbersInOperation] = useState(2)
  return (
    <div>
      <Title />
      <Slider
        min={1}
        max={6}
        value={numberOfDigits}
        change={modifyNumberOfDigits}
      />
      <Slider
        min={2}
        max={3}
        value={numbersInOperation}
        change={modifyNumbersInOperation}
      />
      <Operation
        nod={numberOfDigits}
        nio={numbersInOperation}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export { Math4Kids }
