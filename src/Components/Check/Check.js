import React from 'react'

const Check = () => {
    const handleClick = () =>{
        alert("testing successful!!")
    }
  return (
    <div>
      <button onClick={handleClick}>Alert!!!</button>

    </div>
  )
}

export default Check