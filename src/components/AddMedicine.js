import React,{useState} from "react";

function AddMedicine({medicines,setMedicines}){

  const [name,setName]=useState("");
  const [qty,setQty]=useState("");
  const [price,setPrice]=useState("");
  const [expiry,setExpiry]=useState("");

  const addMedicine=()=>{

    const newMed={
      id:Date.now(),
      name,
      qty,
      price,
      expiry
    };

    setMedicines([...medicines,newMed]);

    setName("");
    setQty("");
    setPrice("");
    setExpiry("");
  };

  return(

    <div className="add-box">

      <h3>Add Medicine</h3>

      <input
        placeholder="Medicine Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        placeholder="Quantity"
        value={qty}
        onChange={(e)=>setQty(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
      />

      <input
        type="date"
        value={expiry}
        onChange={(e)=>setExpiry(e.target.value)}
      />

      <button onClick={addMedicine}>Add</button>

    </div>
  );
}

export default AddMedicine;