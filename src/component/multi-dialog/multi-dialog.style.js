import { Box, FormLabel, RadioGroup } from '@material-ui/core'
import styled from 'styled-components'

export const StyledBox = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(2, 1fr);
`

export const StyledFormLabel = styled(FormLabel)`
  align-self: center;
`

export const StyledRadioGroup = styled(RadioGroup)`
  && {
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: repeat(4, auto);
  }
`
