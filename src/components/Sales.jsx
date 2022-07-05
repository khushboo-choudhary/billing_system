import React from 'react'
import "./Sales.css"

export default function Sales() {
  return (
    <div className='sales'>
      <div className='salesmain'>Sales</div>
      <div className='salesstate'>
        <div className='box1'>
          <div>Rs.250 </div>
          <div>Today</div>
        </div>
        <div className='box1'>
          <div>Rs.2520 </div>
          <div>This Month</div>
        </div>
        <div className='box1'>
          <div>Rs.2520 </div>
          <div>This Year</div>
        </div>
      </div>
    </div>
  )
}
