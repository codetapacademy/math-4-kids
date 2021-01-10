import React from 'react'

const Slider = ({ min, max, value, change }) => {
  const handleChange = eveniment => {
    const { value } = eveniment.target
    change(value)
  }
  return (
    <div>
      <span>min: {min}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <span>max: {max}</span>
      <div>value: {value}</div>
    </div>
  )
}

export { Slider }
