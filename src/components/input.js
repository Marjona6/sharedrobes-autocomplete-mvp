import React from 'react'

const Input = () => {
  return (
    <>
      <label for='item-description'></label>
      <input
        type='text'
        aria-label='item-description'
        name='item-description'
        role='textbox'
        placeholder='What would you like to share?'
      />
    </>
  )
}

export default Input
