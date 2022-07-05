import React from 'react'
import "./Items.css"

export default function Items() {
  return (
    <div className='item'>
      <div className='itemsmain'>Items</div>
      <div className='input1'>
        <div className='itemDetails'>
          <div>Book</div>
          <div>Rs.12</div>
        </div>
        <div className='sold'>Sold: 12</div>
      </div>
      <button className='btn1'>+</button>
    </div>
  )
}
