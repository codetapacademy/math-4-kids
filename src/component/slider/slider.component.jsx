import React from 'react'
import { Button, ButtonGroup, Typography } from '@material-ui/core'

const Slider = ({ list, label, change, value }) => {
  const handleChange = v => {
    // const { value } = eveniment.target
    console.log(v)
    change(v)
  }
  return (
    <div>
      <Typography variant="h2" gutterBottom>{label}</Typography>
      <ButtonGroup size="small">
        {list.map((v, k) => (
          <Button
            key={k}
            variant="contained"
            color={k == value ? 'primary' : 'secondary'}
            onClick={() => handleChange(k)}
          >
            {v}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  )
}

export { Slider }
