import React from "react";
import "./inventroy.css";
import Json from "./InventroyData.json";
class Inventroy extends React.Component{
   constructor(props){
      super(props);
      this.state={
         showEditPopup:false,
         showDeletePopup:false,
         showAddPopup:false
      }
   }
   render(){
      return<div>
     <h1>Inventrory</h1>
     <button className="Add">Add</button>


      <table>
    <thead>
      <tr>
         <th>ProdutName</th>
         <th>Price</th>
         <th>Quantity</th>
         <th>Sold</th>
         <th>Action</th> 
      </tr>
    </thead>

<tbody>
{
   Json.map((item)=>(
      <tr key={item.name}>
         <td>{item.name}</td>
         <td>{item.Price}</td>
         <td>{item.quantity}</td>
         <td>{item.sold}</td>
         <td>
         <button className="Edit">Edit</button>
         <button className="Delete">Delete</button>
      </td>
      </tr>
   ))
}


 
</tbody>


      </table>



      </div>
   }
}


export default Inventroy;