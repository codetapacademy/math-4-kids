import React from 'react'

const Status = () => {
  const currentTime = +window.localStorage.getItem('time')
  const currentCash = +window.localStorage.getItem('cash')

  return (
    <div>
      <div>Cash: £{Math.floor(currentCash/100)} and {currentCash % 100} pennies</div>
      <div>Time: {Math.floor(currentTime / 3600)} hours {Math.floor((currentTime % 3600) / 60)} minutes {currentTime % 60} seconds</div>
    </div>
  )
}

export { Status }
