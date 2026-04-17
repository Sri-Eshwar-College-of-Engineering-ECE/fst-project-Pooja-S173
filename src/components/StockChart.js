import React from "react";

function StockChart({medicines}){

  return(

    <div className="chart">

      <h3>Stock Chart</h3>

      {medicines.map(m=>(

        <div key={m.id}>

          {m.name}

          <div
            className="bar"
            style={{width:m.qty*10}}
          ></div>

        </div>

      ))}

    </div>

  );
}

export default StockChart;