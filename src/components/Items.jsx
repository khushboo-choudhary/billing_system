import React, { useEffect,useState } from 'react'
import axios from 'axios'
import "./Items.css"

export default function Items() {
  const [itemVal, setItemVal] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/items").then((res) => {
      setItemVal(res.data);
      console.log(res.data);
      
      // getData();)
    })
  }, [])
  return (
    <div className='item'>
      <div className='itemsmain'>Items</div>
      {
        itemVal.map((e)=>(

      
      <div className='input1' key={e.id}>
        <div className='itemDetails'>
          <div>{e.name}</div>
          <div>Rs. {e.price}</div>
        </div>
        <div className='sold'>Sold: 12</div>
      </div>
      ))
      }
      <button className='btn1'>+</button>
    </div>
  )
}
