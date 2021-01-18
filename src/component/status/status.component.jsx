import React from 'react'
import { useSelector } from 'react-redux'

const Status = () => {
  const [
    time,
    cash
  ] = useSelector(({ user }) => [
    user.children[user.selected].earnings.time,
    user.children[user.selected].earnings.cash,
  ])
  console.log(time, cash)
  const currentTime = time.reduce((a, c) => (c.d + 1) * (c.b + 1) * 25 + a, 0)
  const currentCash = cash.reduce((a, c) => (c.d + 1) * (c.b + 1) + a, 0)

  return (
    <div>
      <div>Cash: £{Math.floor(currentCash/100)} and {currentCash % 100} pennies</div>
      <div>Time: {Math.floor(currentTime / 3600)} hours {Math.floor((currentTime % 3600) / 60)} minutes {currentTime % 60} seconds</div>
    </div>
  )
}

export { Status }
