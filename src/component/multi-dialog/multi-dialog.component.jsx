import React, { useEffect, useState } from 'react'
import { Radio, RadioGroup, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, FormControlLabel, FormLabel, MenuItem } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-material-ui'
import { useDispatch, useSelector } from 'react-redux'

import { Selector } from '../selector'
import * as UserAction from '../../store/user/user.action'
import * as MDS from './multi-dialog.style'

const MultiDialog = ({ selected, setSelected }) => {
  const [
    user,
    selectedChild,
    level,
    bonus,
  ] = useSelector(({ user }) => ([
    user,
    user.selected,
    user.children[user.selected].settings.level,
    user.children[user.selected].settings.bonus,
  ]))
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
    child: 'Child Profile',
    level: 'The higher the Better',
    bonus: 'x1 or x2'
  }

  const onSubmit = values => {
    const { formName } = values
    console.log(values)
    console.log(formName)
    if (formName === 'parent') {
      dispatch(UserAction.updateParentProfileAction(values))
    }
    if (formName === 'child') {
      dispatch(UserAction.updateChildProfileAction(values))
    }
    setSelected('')
  }

  const initialValues = selected === 'parent'
    ? { ...user.parent.profile, formName: user.parent.formName}
    : (selected === 'child')
      ? { ...user.children[selectedChild].profile, formName: user.children[selectedChild].formName}
      : {}

  const handleSelectorChange = (value, type) => {
    console.log(value, type)
    dispatch(UserAction.updateChildSettingsAction({
      type,
      value
    }))
  }
console.log(initialValues)
  return (
    <Dialog onClose={handleClose} open={!!selected}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ isValid, values, handleBlur, handleChange }) => (
          <Form>
            <DialogTitle>
              <Typography>{title[selected]}</Typography>
            </DialogTitle>
            <DialogContent dividers>
              {selected === 'level' && (
                <Selector
                  value={level}
                  list={['starter x1', 'easy x2', 'junior x3', 'normal x4', 'pro x5', 'expert x6', 'guru x7']}
                  label="Level"
                  change={e => handleSelectorChange(e, 'level')}
                  orientation="vertical"
                />
              )}
              {selected === 'bonus' && (
                <Selector
                  value={bonus}
                  list={['x1', 'x2']}
                  label="Bonus Multiplier"
                  change={e => handleSelectorChange(e, 'bonus')}
                  orientation="horizontal"
                />
              )}
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
                      {[...Array(99).keys()].map(value => (
                        <MenuItem
                          key={value + 18}
                          value={value + 18}
                          selected={user.parent.profile.age === value + 18}
                        >
                          {value + 18}
                        </MenuItem>
                      ))}
                    </Field>
                  </MDS.StyledRadioGroup>
                </>
              )}
              {selected === 'child' && (
                <>
                  <MDS.StyledBox margin={1}>
                    <Box margin={1} style={{alignSelf: 'end'}}>
                      <Field
                        
                        name="firstName"
                        id="firstName"
                        type="text"
                        label="First Name"
                        component={TextField}
                        disabled={false}
                      />
                    </Box>
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
                      {[...Array(18).keys()].map(value => (
                        <MenuItem
                          key={value + 2}
                          value={value + 2}
                          selected={user.parent.profile.age === value + 2}
                        >
                          {value + 2}
                        </MenuItem>
                      ))}
                    </Field>
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
