import React, { useState } from 'react'
// import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Operation } from '../operation'
import { Selector } from '../selector'
import { Title } from '../title'
import { Status } from '../status'
import { ActionButtonList } from '../action-button'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core'
import { Field } from 'formik'

const Math4Kids = () => {
  const [selected, setSelected] = useState('')
  const [numberOfDigits, modifyNumberOfDigits] = useState(1)
  const [numbersInOperation, modifyNumbersInOperation] = useState(0)
  
  const handleClose = () => {
    setSelected('')
  }

  const title = {
    parent: 'Parent Profile',
    child: 'Child Profile'
  }

  return (
    <div>
      <Title />
      <Status />
      <h1>Earn  {10 * (numberOfDigits + 1) * (numbersInOperation + 1)} points to spend.</h1>
      <Operation
        nod={numberOfDigits + 1}
        nio={numbersInOperation + 2}
      />
      <Dialog onClose={handleClose} open={!!selected}>
        <DialogTitle>
          <Typography>{title[selected]}</Typography>
        </DialogTitle>
        <DialogContent dividers>
          {selected === 'parent' && (
            <Formik
              initialValues={{ firstName: '', lastName: '', age: '', sex: '' }}
            >
              <Form>
                {({ isValid }) => (
                  <div>
                    <Field
                      name="firstName"
                    />
                  </div>
                )}
              </Form>
            </Formik>
          )}
        </DialogContent>
        <DialogActions>
          <Button>Save</Button>
        </DialogActions>
      </Dialog>
      <Selector
        value={numberOfDigits}
        list={['starter x1', 'easy x2', 'junior x3', 'normal x4', 'pro x5', 'expert x6', 'guru x7']}
        label="Difficulty"
        change={modifyNumberOfDigits}
        orientation="vertical"
      />
      <Selector
        value={numbersInOperation}
        list={['x1', 'x2']}
        label="Bonus Multiplier"
        change={modifyNumbersInOperation}
        orientation="horizontal"
      />
      <ActionButtonList setModal={setSelected} />
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
