import React, { useState } from 'react'
// import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Operation } from '../operation'
import { Title } from '../title'
import { Status } from '../status'
import { ActionButtonList } from '../action-button'
import { MultiDialog } from '../multi-dialog'

const Math4Kids = () => {
  const [selectedModal, setSelectedModal] = useState('')

  return (
    <div>
      <Title />
      <Status />
      {/* <h1>Earn  {10 * (numberOfDigits + 1) * (numbersInOperation + 1)} points to spend.</h1> */}
      <Operation />
      <MultiDialog
        selected={selectedModal}
        setSelected={setSelectedModal}
      />
      <ActionButtonList setModal={setSelectedModal} />
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
