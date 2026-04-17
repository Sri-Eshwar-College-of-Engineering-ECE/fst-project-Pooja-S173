import React,{useState} from "react";

function MedicineTable({medicines,setMedicines,search}){

  const [editMed,setEditMed] = useState(null);

  const deleteMed=(id)=>{
    setMedicines(medicines.filter(m=>m.id!==id));
  };

  const saveEdit=()=>{

    setMedicines(
      medicines.map(m =>
        m.id === editMed.id ? editMed : m
      )
    );

    setEditMed(null);
  };

  const today = new Date();

  return(

    <div>

    <table>

      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Expiry</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

      {medicines
      .filter(m=>m.name.toLowerCase().includes(search.toLowerCase()))
      .map(m=>{

        const exp=new Date(m.expiry);
        let status="OK";

        if(exp<today){
          status="Expired";
        }
        else if((exp-today)/(1000*60*60*24)<30){
          status="Expiring Soon";
        }

        return(

        <tr key={m.id}>

          <td>{m.name}</td>
          <td>{m.qty}</td>
          <td>{m.price}</td>
          <td>{m.expiry}</td>

          <td>

            {m.qty<10 &&
              <span className="low">Low Stock </span>
            }

            {status==="Expired" &&
              <span className="expired">Expired</span>
            }

            {status==="Expiring Soon" &&
              <span className="warning">Expiring Soon</span>
            }

            {status==="OK" && "OK"}

          </td>

          <td>

            <button onClick={()=>setEditMed(m)}>
              Edit
            </button>

            <button onClick={()=>deleteMed(m.id)}>
              Delete
            </button>

          </td>

        </tr>

        )
      })}

      </tbody>

    </table>

    {/* EDIT POPUP */}

    {editMed &&

      <div className="popup">

        <div className="popup-box">

          <h3>Edit Medicine</h3>

          <input
            value={editMed.name}
            onChange={(e)=>setEditMed({...editMed,name:e.target.value})}
          />

          <input
            value={editMed.qty}
            onChange={(e)=>setEditMed({...editMed,qty:e.target.value})}
          />

          <input
            value={editMed.price}
            onChange={(e)=>setEditMed({...editMed,price:e.target.value})}
          />

          <input
            type="date"
            value={editMed.expiry}
            onChange={(e)=>setEditMed({...editMed,expiry:e.target.value})}
          />

          <button onClick={saveEdit}>Save</button>
          <button onClick={()=>setEditMed(null)}>Cancel</button>

        </div>

      </div>

    }

    </div>

  );
}

export default MedicineTable;