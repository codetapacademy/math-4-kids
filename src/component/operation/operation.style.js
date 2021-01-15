import styled from 'styled-components'

export const StyledOperationInput = styled.input`
  width: 32px;
  height: 32px;
  border: 0;
  border: 0;
  outline: 0;
  background-color: transparent;
  /* color: #fff; */
  font-weight: bold;
  text-align: center;
  font-size: 2.5rem;
  padding: 10px 0;
`

export const StyledOperation = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
`

export const StyledOperationSpan = styled.span`
  border: 4px solid lightgray;
  border-radius: 1rem;
  margin-left: 1rem;
  width: 60px;
  padding-left: 8px;
  display: flex;
  justify-content: center;

  &:nth-child(3n + 1) {
    color: #36b6f5;
    position: relative;

    &:not(:first-child)::after {
      content: ',';
      position: absolute;
      top: 0;
      right: -34%;
    }

    &:first-child::after {
      content: '';
    }
  }

  &:nth-child(3n + 2) {
    color: #882ff6;
  }

  &:nth-child(3n) {
    color: #f99d06;
  }

  /* $color1: #36b6f5;
$color2: #882ff6;
$color3: #f99d06;
$color4: #f905db;
$color5: #35d460;
 */`

export const StyledOperationType = styled.div`
  grid-column: 2/3;
  grid-row: 1/6;
  font-size: 48px;
  margin-top: -5px;
`

export const StyledOperationDelimiter = styled.div`
  border-top: 1px solid red;
  grid-column: 1/-1;
`

export const StyledOperationNumber = styled.div`
  font-size: 48px;
  letter-spacing: 7px;
  display: flex;
  /* justify-content: flex-end; */
  flex-direction: row-reverse;
`
