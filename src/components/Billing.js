import React, { useState } from "react";

function Billing({ medicines }) {

  const [cart, setCart] = useState([]);

  const addToCart = (medicine) => {
    setCart([...cart, medicine]);
  };

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div>

      <h1>Billing</h1>

      <h3>Available Medicines</h3>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Add</th>
          </tr>
        </thead>

        <tbody>
          {medicines.map((m, index) => (
            <tr key={index}>
              <td>{m.name}</td>
              <td>${m.price}</td>
              <td>
                <button onClick={() => addToCart(m)}>Add</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>


      <h3>Cart</h3>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>

      <h2>Total: ${total}</h2>

    </div>
  );
}

export default Billing;