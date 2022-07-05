import axios from "axios";
import { useEffect, useState } from 'react';
import './App.css';
import Items from './components/Items';
import Mybills from './components/Mybills';
import Newbills from './components/Newbills';
import Sales from './components/Sales';

function App() {

  const [name, setNames] = useState("");
  const[price, setPrice] = useState("");
  const [val,setVal] = useState([]);
  const[quantity, setQuantity] = useState("");
  const [nameQty ,setNameQty] = useState("");
  const [bill,setBill] = useState([]);

  useEffect (()=>{
    getData();
  }, [])

  function getData(){
    axios.get("http://localhost:8080/items").then((res) =>{
      setVal(res.data);

      
   })
   .catch((err)=>{
    console.log(err.message);
   })
  }
  const handleAdd =()=> {
    const data = {name, price}
     axios.post("http://localhost:8080/items", data).then((res) =>{
        console.log("dai",res.data);
        getData();
     })
     .catch((err)=>{
      console.log(err.message);
     })
  }

  const handAdd = () => {
    const priceVal = {price}
    const data = {
      nameQty,
      quantity,
      priceVal
    }
    console.log("data" , data)
    

    setBill(data);
    axios.post("http://localhost:8080/selected", data,priceVal).then((res) =>{
        console.log(res.data);
        console.log("price", priceVal)
        
        // getData();
      
     })
     .catch((err)=>{
      console.log(err.message);
     })
  }
  return (
    <div className='Main_Box'>
      


      <div className='main_div'>

      <div className='top' onChange={(e) => setNameQty(e.target.value)}>
        <div className='name'>Select item</div>
        <select>
        {
          val.map((e)=>(
            <option value= {e.name}>{e.name}</option>
          ))
        }
          
        </select>
        <input type="text" className='quantity1' placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)}/><br />
        <button className='btn'  onClick={() =>handAdd()} >Add</button>
      </div>

        <div className='App2'>
        <div className='name'>Add Item</div>
        <input type="text" className='quantity1' onChange={(e)=> setNames(e.target.value)} placeholder="Name" /><br />
        <input type="text" className='quantity1' onChange={(e)=> setPrice(e.target.value)} placeholder="Price" /><br />
        <button className='btn' onClick={handleAdd}>Add</button>
        </div>
      </div>


      <div className="App">
          <Newbills />
          <Items />
          <Mybills />
          <Sales />
        </div>
    </div>



  );
}

export default App;
