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
//handleEditPopu
handleShowEditPopup=()=>{
   this.setState({
      showEditPopup:true
   });
}


   //handleDeleteButton
handleDeletepopup=()=>{
   this.setState({showDeletePopup:true});
}
//handleCancelPopup
handleCanclePopup=()=>{
   this.setState({
      showDeletePopup:false,
      showEditPopup:false
   })
}

   render(){
      const {showDeletePopup,showEditPopup}=this.state;
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
         <button className="Edit" onClick={this.handleShowEditPopup}>Edit</button>
         <button className="Delete" onClick={this.handleDeletepopup}>Delete</button>
      </td>
      </tr>
   ))
}

</tbody>



      </table>

{showEditPopup&&(
<div className="Popup">
  <div className="Popup-content">
   <p>Edit Your Data</p>
   <div className="EditPopup">
      <div className="editlabel">
      <label>ProdutName</label>
      <label>Price</label>
      <label>Quantity</label>
      <label>Sold</label>
      </div>
   
   <div className="editbox">
   <input type="text"/>
   <input type="text"/>
   <input type="text"/>
   <input type="text"/>
   </div>
      
   </div>
   <div className="Popup-button">
      <button className="yes">Update</button>
      <button className="cancel" onClick={this.handleCanclePopup}>Cancel</button>
   </div>
  </div>

</div>

)}


{showDeletePopup &&(
   <div className="Popup">
      <div className="Popup-content">
      <p>Are you sure you want you delete?</p>
      <div className="Popup-button">
         <button className="yes">yes</button>
         <button className="cancel" onClick={this.handleCanclePopup}>Cancel</button>
      </div>


      </div>
   </div>
)}


 </div>
   }
}


export default Inventroy;