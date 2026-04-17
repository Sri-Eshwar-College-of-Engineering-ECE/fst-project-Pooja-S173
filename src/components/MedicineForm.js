import React, { useState } from "react";

const MedicineForm = ({ onAdd }) => {
  const [medicine, setMedicine] = useState({
    name: "",
    dosage: "",
    quantity: "",
    minimumStock: "",
  });

  const handleChange = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(medicine);
    setMedicine({
      name: "",
      dosage: "",
      quantity: "",
      minimumStock: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Medicine</h3>
      <input name="name" placeholder="Name" value={medicine.name} onChange={handleChange} required />
      <input name="dosage" placeholder="Dosage" value={medicine.dosage} onChange={handleChange} required />
      <input name="quantity" type="number" placeholder="Quantity" value={medicine.quantity} onChange={handleChange} required />
      <input name="minimumStock" type="number" placeholder="Minimum Stock" value={medicine.minimumStock} onChange={handleChange} required />
      <button type="submit">Add</button>
    </form>
  );
};

export default MedicineForm;
