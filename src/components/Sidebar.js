import React from "react";

function Sidebar({ setPage }) {

  return (

    <div className="sidebar">

      <h2 className="logo">💊 Pharmacy</h2>

      <ul>

        <li onClick={() => setPage("dashboard")}>
          Dashboard
        </li>

        <li onClick={() => setPage("medicines")}>
          Medicines
        </li>

        <li onClick={() => setPage("categories")}>
          Categories
        </li>

        <li onClick={() => setPage("billing")}>
          Billing
        </li>

        <li onClick={() => setPage("sales")}>
          Sales
        </li>

        <li onClick={() => setPage("users")}>
          Users
        </li>

        <li onClick={() => setPage("suppliers")}>
          Suppliers
        </li>

        <li onClick={() => setPage("reports")}>
          Reports
        </li>

        <li onClick={() => setPage("settings")}>
          Settings
        </li>

      </ul>

    </div>

  );

}

export default Sidebar;