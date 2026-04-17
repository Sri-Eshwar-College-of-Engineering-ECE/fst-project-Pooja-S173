import React, { useState } from "react";

function Sales({ medicines }) {

  const [sales, setSales] = useState([]);

  const addSale = (medicine) => {

    const newSale = {
      id: Date.now(),
      name: medicine.name,
      price: medicine.price
    };

    setSales([...sales, newSale]);
  };

  const total = sales.reduce((sum, s) => sum + Number(s.price), 0);

  return (

    <div>

      <h1>Sales</h1>

      <h3>Medicines</h3>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Sell</th>
          </tr>
        </thead>

        <tbody>

          {medicines.map((m, index) => (

            <tr key={index}>
              <td>{m.name}</td>
              <td>{m.price}</td>
              <td>
                <button onClick={() => addSale(m)}>
                  Sell
                </button>
              </td>
            </tr>

          ))}

        </tbody>

      </table>

      <h3>Sales List</h3>

      <ul>

        {sales.map((sale) => (
          <li key={sale.id}>
            {sale.name} - ${sale.price}
          </li>
        ))}

      </ul>

      <h2>Total Sales: ${total}</h2>

    </div>
  );
}

export default Sales;