import styled from 'styled-components'

export const StyledOperation = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
`

export const StyledOperationType = styled.div`
  grid-column: 2/3;
  grid-row: 1/6;
`

export const StyledOperationDelimiter = styled.div`
  border-top: 1px solid red;
  grid-column: 1/-1;
`

export const StyledOperationNumber = styled.div`
  text-align: right;
`
