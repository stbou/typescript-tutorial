import React from 'react'
import "./styles.css"

const InputFeild = () => {
  return (
    <form className='input'>
        <input type='input' placeholder='Enter a task'className='input__box'/>
        <button className='input__submit' type='submit'>
            GO
        </button>
    </form>

  )
}

export default InputFeild
