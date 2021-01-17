import React from 'react'
import { Button, ButtonGroup, Typography } from '@material-ui/core'

const Selector = ({ list, label, change, value, orientation }) => {
  const handleChange = v => {
    // const { value } = eveniment.target
    console.log(v)
    change(v)
  }

  return (
    <div>
      <Typography variant="h2" gutterBottom>{label}</Typography>
      <ButtonGroup size="small" orientation={orientation}>
        {list.map((v, k) => (
          <Button
            key={k}
            variant="contained"
            color={k == value ? 'secondary' : 'primary'}
            onClick={() => handleChange(k)}
          >
            {v}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  )
}

export { Selector }
