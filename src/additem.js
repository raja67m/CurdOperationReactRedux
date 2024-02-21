import React from "react";
import "./additem.css";
import { Link } from 'react-router-dom';
import { addItem } from "./action";
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

class Additem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: "",
      newPrice: "",
      newQuantity: "",
      newSold: "",
    };
  }

 

//handleAdditem

handleAddItem=()=>{
  const {newName,newPrice,newQuantity,newSold}=this.state;

  if(newName && newPrice && newQuantity && newSold){
    const newItem={
      id: uuidv4(), 
      itemName:newName,
      Price:newPrice,
      quantity:newQuantity,
      sold:newSold
    };
this.props.addItem(newItem);
this.setState({
  newName:"",
  newPrice:"",
  newQuantity:"",
  newSold:"",

});

//checking the error 
console.log("this is newitem "+ newItem);
}
else{
  console.log(Error);
}
}


  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <h1>Add New Product</h1>
        <div className="Additemcontainer">
          <div className="lablesName">
            <label>Product Name</label>
            <label>Price</label>
            <label>Quantity</label>
            <label>Sold</label>
          </div>
          <div className="NewItemName">
            <input
              type="text"
              name="newName"
              value={this.state.newName}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="newPrice"
              value={this.state.newPrice}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="newQuantity"
              value={this.state.newQuantity}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="newSold"
              value={this.state.newSold}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="Buttons">


  <Link to='/added'>
  <button className="addbtn" onClick={this.handleAddItem}>Add</button>
  </Link>

         
          <Link to='/cancel'>
            <button className="cancelbtn">Cancel</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Additem);
