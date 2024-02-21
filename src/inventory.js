

import React from "react";
import { connect } from "react-redux";
import {deleteItem, updateItem } from "./action";
import { Link } from 'react-router-dom';
import "./inventroy.css";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditPopup: false,  // all variables ini....
      showDeletePopup: false,
      selectedItem: null,
      newNumber:"",
      newName: "",
      newPrice: "",
      newQuantity: "",
      newSold: "",
    };
  }


  // handleEditPopupfunciton
  handleEditPopup = (item) => {
    this.setState({
      showEditPopup: true,
      selectedItem: item,
    
      newName: item.itemName,
      newPrice: item.Price,
      newQuantity: item.quantity,
      newSold: item.sold,
    });
  };

//handleUpdatedItem
  handleUpdateItem = () => {
    const { selectedItem, newName, newPrice, newQuantity, newSold } = this.state;
  
    if (selectedItem) {
      const updatedItem = {
        ...selectedItem,
        itemName: newName || selectedItem.itemName, // Corrected key to itemName
        Price: newPrice || selectedItem.Price,
        quantity: newQuantity || selectedItem.quantity,
        sold: newSold || selectedItem.sold,
      };
  
      this.props.updateItem(updatedItem);
      this.handleCancelPopup();
    }
  };
  
// All input fileds value get one function
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //handleDeletedFunciton
  
  handleDeleteItem = () => {
    const { itemToDelete } = this.state;
    if (itemToDelete) {
      this.props.deleteItem(itemToDelete); // Pass the item directly
      this.handleCancelPopup();
    }
  };
  
//handleDeletePopupfunction


  handleDeletePopup = (item) => {
    this.setState({ showDeletePopup: true, itemToDelete: item });
  };
  
//handleCalcelPopup

  handleCancelPopup = () => {
    this.setState({
      showDeletePopup: false,
      showEditPopup: false,
      selectedItem: null,
    });
  };

  render() {
    const { showDeletePopup, showEditPopup} = this.state;

    return (
      <div>
        <h1>Inventory</h1>
        <Link to ='/Add'>
        <button className="Add" onClick={this.handleAddItem}>
          Add
        </button>
        </Link>

        <table>
          <thead>
            <tr>
            
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sold</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>


        


            {this.props.items.map((item) => (
              
              <tr key={item.id}>
               <td>{item.itemName}</td>
                <td>{item.Price}</td>
                <td>{item.quantity}</td>
                <td>{item.sold}</td>
                <td>
                  <button className="Edit" onClick={() => this.handleEditPopup(item)} >
                    Edit
                  </button>
                  <button className="Delete" onClick={() => this.handleDeletePopup(item)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showEditPopup && (
          <div className="Popup">
            <div className="Popup-content">
              <p>Edit Your Data</p>
              <div className="EditPopup">
                <div className="editlabel">
                  <label>Product Name</label>
                  <label>Price</label>
                  <label>Quantity</label>
                  <label>Sold</label>
                </div>

                <div className="editbox">
                <input type="text" name="newName" value={this.state.newName} onChange={this.handleInputChange} />
                  <input type="text" name="newPrice" value={this.state.newPrice} onChange={this.handleInputChange} />
                  <input type="text" name="newQuantity" value={this.state.newQuantity} onChange={this.handleInputChange} />
                  <input type="text" name="newSold" value={this.state.newSold} onChange={this.handleInputChange} />

                </div>
              </div>
              <div className="Popup-button">
                <button className="yes" onClick={this.handleUpdateItem} >
                  Update
                </button>
                <button className="cancel" onClick={this.handleCancelPopup}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {showDeletePopup && (
          <div className="Popup">
            <div className="Popup-content">
              <p>Are you sure you want to delete?</p>
              <div className="Popup-button">
                <button className="yes" onClick={this.handleDeleteItem}>
                  Yes
                </button>
                <button className="cancel" onClick={this.handleCancelPopup}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({


  deleteItem: (itemName) => dispatch(deleteItem(itemName)),
  updateItem: (item) => dispatch(updateItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);


