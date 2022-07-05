import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Newbills.css"


export default function Newbills() {
  const [bag, setBag] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/selected").then((res) => {
      setBag(res.data);
      console.log(res.data);
      // getData();)
    })
  }, [])

  return (

    <div className='main'>
      <div className='newbillhead'>
        <div>Newbills</div>
        <div>Cart <span>1</span> <button className='btn1' >+</button></div>
      </div>
      {bag.map((e) => (
      <div className='input1' key={e.id}>
       
        <div className='itemDetails' key={e.id}>
       

              <div>name: {e.nameQty}</div>
              <div>Price{e.priceVal.price}</div>
        
          </div>
        <div className='quantity'>quty:{e.quantity}</div>
       
        </div>
        ))
        }
     


      <div className='input2'>
        <div className='itemDetails'>
          <div>Amount : RS. 200</div>
          <div>Total Items: 1</div>
        </div>
      </div>

    </div>
  )
}
