import React from 'react'
import "./Mybills.css"

export default function Mybills() {
  const RandomNumber = ("BILL" + Math.floor(Math.random() * 10000) + 1 );
  const date = new Date();
  const dar = date.toLocaleString();
  
  return (
    <div className='mybill'>
      <div className='billmain'>Mybills</div>

      <div className='input1'>
        <div className='itemDetails'>
          <div>{RandomNumber}</div>
          <div>RS. 120</div>
        </div>
        <div className='date'>{dar}</div>
      </div>
    </div>
  )
}
