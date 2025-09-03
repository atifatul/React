import React, { useContext } from 'react'
import { globalcontext } from './Fake'

const FakeChild1 = () => {
    let val= useContext(globalcontext);
  return (
    <div>
      {val}
    </div>
  )
}

export default FakeChild1
