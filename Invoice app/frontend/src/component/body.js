import React, { useState } from "react";
import { DataForm } from "./tabledata";
import { jsonData } from "../data";
import { Add } from "../modules/user/add";


var sum=0
export const TableData = () => {
  const [tableData, settableData] = useState(jsonData);
  const [totalPrice, setTotalPrice] = useState();
  const [cgst, setCgst] = useState();
  const [sgst, setSgst] = useState();
  const [netprice, setNetprice] = useState();
  const tableRows = tableData.map((info) => {
    return (
      
      <tr>
        <td>{info.sno}</td>
        <td>{info.item}</td>
        <td>{info.quantity}</td>
       <td>{info.price}</td>
        <td>{info.totalprice}</td>
      </tr>
    );
  });
  const addRows = (data) => {
    const totalData = tableData.length;
    data.sno = totalData;
    data.totalprice = data.quantity * data.price;
    sum=sum+data.totalprice
    var gst=0.18*sum;
    var nt=sum+gst+gst;
    setTotalPrice(sum);
    setSgst(gst);
    setCgst(gst);
    setNetprice(nt);
    const updatedtableData = [...tableData];
    updatedtableData.push(data);
    settableData(updatedtableData);
  }  
  return (
    <div>
      <table className="table table-dark striped-columns">
        <thead>
          <tr>
            <th>SNO.</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
            
      </table>
      <DataForm func={addRows} />
      < tr style={{ marginTop: 48 }}>
        <td span={8} offset={16}>
          <table >
            <tr>
              <th>Gross Total :</th>
              <td>{totalPrice}</td>
            </tr>
            <tr>
              <th>SGST @18% :</th>
              <td>Rs. {sgst}</td>
            </tr>
            <tr>
              <th>CGST @18% :</th>
              <td>Rs.{cgst}</td>
            </tr>
            <tr>
              <th>Nett Total :</th>
              <td>Rs. {netprice}</td>
              
            </tr>
          </table>
        </td>
      </tr>
 <Add 
 
 tabledata={tableData}

 totalprice={totalPrice}
 sgst={sgst}
 cgst={cgst}
 nettotal={netprice}

 />   
 </div>
  
  );
}
