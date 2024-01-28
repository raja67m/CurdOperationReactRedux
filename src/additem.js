import React from "react";
import "./additem.css";
class Additem extends React.Component{
   render(){
      return<div>
   <h1>Add New Product</h1>

    <div className="lablesName">
<label>Product Name</label>
<label>Price</label>
<label>Quantity</label>
<label>Sold</label>
    </div>

    <div className="NewItemName">

      <input type="text"/>
      <input type="text"/>
      <input type="text"/>
      <input type="text"/>


    </div>


<div className="Buttons">
   <button>Add</button>
   <button>Cancel</button>
</div>
      </div>
   }
}

export default Additem;
