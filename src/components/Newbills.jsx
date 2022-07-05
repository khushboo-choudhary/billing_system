import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Newbills.css"


export default function Newbills() {
  const [bag, setBag] = useState([]);
  // const [count, setCount] = useState("");

  var count = 0;
 var total= bag.reduce((accumulator,current) => accumulator + current.priceVal.price * current.quantity, count)

  //  setCount  += (bag.priceVal.price * bag.quantity)
 
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
        <div>Cart <span className='count'>{bag.length}</span> <button className='btn1' >+</button></div>
      </div>
      {bag.map((e) => (
      <div className='input1' key={e.id}>
       
        <div className='itemDetails' key={e.id}>
       

              <div>{e.nameQty}</div>
              <div>RS. {e.priceVal.price}</div>
             
          </div>
        <div className='quantity'>Quantity: {e.quantity}</div>
       
        </div>
        ))
        }
     

       
        <div className='input2'>
        <div className='itemDetails'>

          <div>Amount : Rs. {total}</div>
          <div>Total Items: {bag.length}</div>
        </div>
      </div>

   
       </div>
  )
}
