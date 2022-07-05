import React from 'react'
import "./Newbills.css"

export default function Newbills(bill) {
console.log(bill)
  
  return (

    <div className='main'>
      <div className='newbillhead'>
        <div>Newbills</div>
        <div>Cart <span>1</span> <button className='btn1' >+</button></div>
      </div>
      <div className='input1'>
        <div className='itemDetails'>
        {/* {
          props.data.map((e)=>(
            <div value= {e.name}>{e.name}</div>
          ))
        } */}
       
          <div>Book</div>
          <div>Rs.140</div>
        </div>
        <div className='quantity'>Quantity: 12</div>
      </div>
      <div className='input2'>
      <div className='itemDetails'>
          <div>Amount : RS. 200</div>
          <div>Total Items: 1</div>
        </div>
      </div>

    </div>
  )
}
