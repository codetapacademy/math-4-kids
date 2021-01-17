import { AppBar, Fab, IconButton } from '@material-ui/core';
import styled from 'styled-components'

export const StyledActionAppBar = styled(AppBar)`
  && {
    bottom: 0;
    top: initial;
  }
`

export const StyledActionButtonIconButton = styled(Fab)`
`

export const StyledActionButtonWrapper = styled.div`
  position: fixed;
  display: grid;
  grid-gap: 0.5rem;
  /* flex-direction: column; */
  bottom: 0.5rem;
  left: 0.5rem;
`
