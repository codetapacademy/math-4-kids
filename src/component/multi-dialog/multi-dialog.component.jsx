import React, { useEffect, useState } from 'react'
import { Radio, RadioGroup, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, FormControlLabel, FormLabel, MenuItem } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-material-ui'
import { useDispatch, useSelector } from 'react-redux'

import { updateParentProfileAction } from '../../store/user/user.action'
import * as MDS from './multi-dialog.style'

const MultiDialog = ({ selected, setSelected }) => {
  const [user, parent] = useSelector(({ user }) => ([ user, user.parent ]))
  const dispatch = useDispatch()

  useEffect(() => {
    window.localStorage.setItem('user', JSON.stringify(user))
    console.log('update local storage')
  }, [user])

  const handleClose = () => {
    setSelected('')
  }

  const title = {
    parent: 'Parent Profile',
    child: 'Child Profile'
  }

  const onSubmit = values => {
    const { formName } = values
    console.log(values, formName)
    if (formName === 'parent') {
      dispatch(updateParentProfileAction(values))
    }
    setSelected('')
  }

  return (
    <Dialog onClose={handleClose} open={!!selected}>
      <Formik
        initialValues={parent}
        onSubmit={onSubmit}
      >
        {({ isValid, values, handleBlur, handleChange }) => (
          <Form>
            <DialogTitle>
              <Typography>{title[selected]}</Typography>
            </DialogTitle>
            <DialogContent dividers>
              {selected === 'parent' && (
                <>
                  <MDS.StyledBox margin={1}>
                    <Field
                      name="firstName"
                      id="firstName"
                      type="text"
                      label="First Name"
                      component={TextField}
                      disabled={false}
                    />

                    <Field
                      name="lastName"
                      id="lastName"
                      type="text"
                      label="Last Name"
                      component={TextField}
                      disabled={false}
                    />
                  </MDS.StyledBox>

                  <MDS.StyledRadioGroup
                    name="sex"
                    value={values.sex}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    row
                  >
                    <MDS.StyledFormLabel>Sex</MDS.StyledFormLabel>
                    <FormControlLabel
                      value="male"
                      label="Male"
                      control={<Radio  />}
                    />
                    <FormControlLabel
                      value="female"
                      label="Female"
                      control={<Radio  />}
                    />
                    <Field
                      name="age"
                      id="age"
                      type="text"
                      label="Age"
                      select
                      variant="standard"
                      margin="normal"
                      disabled={false}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      component={TextField}
                    >
                      {[...Array(4).keys()].map(value => (
                        <MenuItem
                          key={value + 18}
                          value={value + 18}
                          selected={parent.age === value + 18}
                        >
                          {value + 18}
                        </MenuItem>
                      ))}
                    </Field>
                  </MDS.StyledRadioGroup>
                </>
              )}
            </DialogContent>
            <DialogActions>
              <Button type="submit">Save</Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  )
}

export { MultiDialog }
