import React, { useState } from "react";

function EditMedicineModal({medicine, medicines, setMedicines, close}){

  const [name,setName] = useState(medicine.name);
  const [dosage,setDosage] = useState(medicine.dosage);
  const [quantity,setQuantity] = useState(medicine.quantity);
  const [price,setPrice] = useState(medicine.price);

  const updateMedicine = ()=>{

    const updated = medicines.map(m =>
      m.id === medicine.id ?
      {...m, name, dosage, quantity, price} : m
    );

    setMedicines(updated);
    close();
  };

  return(

    <div className="modal">

      <div className="modal-box">

        <h3>Edit Medicine</h3>

        <input value={name} onChange={(e)=>setName(e.target.value)} />
        <input value={dosage} onChange={(e)=>setDosage(e.target.value)} />
        <input value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
        <input value={price} onChange={(e)=>setPrice(e.target.value)} />

        <button onClick={updateMedicine}>Save</button>
        <button onClick={close}>Cancel</button>

      </div>

    </div>

  );
}

export default EditMedicineModal;