import React, { useState } from "react";

import Sidebar from "./Sidebar";
import AddMedicine from "./AddMedicine";
import MedicineTable from "./MedicineTable";
import StockChart from "./StockChart";
import Billing from "./Billing";
import Categories from "./Categories";
import Users from "./Users";
import Sales from "./Sales";

function Dashboard() {

  const [page, setPage] = useState("dashboard");
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState("");

  // Statistics
  const totalMedicines = medicines.length;

  const lowStock = medicines.filter(m => m.qty < 10).length;

  const expiring = medicines.filter(m => {
    const today = new Date();
    const expiry = new Date(m.expiry);
    const diff = (expiry - today) / (1000 * 60 * 60 * 24);
    return diff < 30;
  }).length;

  return (

    <div className="dashboard">

      {/* Sidebar */}
      <Sidebar setPage={setPage} />

      {/* Main Content */}
      <div className="content">

        {/* DASHBOARD HOME */}
        {page === "dashboard" && (

          <div>

            <h1>Pharmacy Dashboard</h1>

            <div className="cards">

              <div className="card">
                <h3>Total Medicines</h3>
                <p>{totalMedicines}</p>
              </div>

              <div className="card">
                <h3>Low Stock</h3>
                <p>{lowStock}</p>
              </div>

              <div className="card">
                <h3>Expiring Soon</h3>
                <p>{expiring}</p>
              </div>

            </div>

            <StockChart medicines={medicines} />

          </div>

        )}

        {/* MEDICINES PAGE */}
        {page === "medicines" && (

          <div>

            <h1>Medicine Management</h1>

            <AddMedicine
              medicines={medicines}
              setMedicines={setMedicines}
            />

            <input
              placeholder="Search medicine..."
              className="search"
              onChange={(e) => setSearch(e.target.value)}
            />

            <MedicineTable
              medicines={medicines}
              setMedicines={setMedicines}
              search={search}
            />

          </div>

        )}

        {/* CATEGORIES */}
        {page === "categories" && (
          <Categories />
        )}

        {/* BILLING */}
        {page === "billing" && (
          <Billing medicines={medicines} />
        )}

        {/* SALES */}
        {page === "sales" && (
          <Sales medicines={medicines} />
        )}

        {/* USERS */}
        {page === "users" && (
          <Users />
        )}

        {/* SUPPLIERS */}
        {page === "suppliers" && (

          <div>

            <h1>Suppliers</h1>

            <table border="1" cellPadding="10">

              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Phone</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>John</td>
                  <td>ABC Pharma</td>
                  <td>9876543210</td>
                </tr>

                <tr>
                  <td>Emma</td>
                  <td>Global Medicines</td>
                  <td>9876543211</td>
                </tr>

                <tr>
                  <td>David</td>
                  <td>Healthcare Ltd</td>
                  <td>9876543212</td>
                </tr>

              </tbody>

            </table>

          </div>

        )}

        {/* REPORTS */}
        {page === "reports" && (

          <div>

            <h1>Inventory Reports</h1>

            <ul>
              <li>Total Medicines: {totalMedicines}</li>
              <li>Low Stock: {lowStock}</li>
              <li>Expiring Soon: {expiring}</li>
            </ul>

          </div>

        )}

        {/* SETTINGS */}
        {page === "settings" && (

          <div>

            <h1>Settings</h1>

            <ul>
              <li>Change Password</li>
              <li>Enable Notifications</li>
              <li>Backup System</li>
            </ul>

          </div>

        )}

      </div>

    </div>

  );
}

export default Dashboard;