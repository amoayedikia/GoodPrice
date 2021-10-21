import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner
      animation='border'
      variant='primary'
      className='my-3 d-block mx-auto'
    />
  )
}

export default Loader
