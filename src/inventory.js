

import React from "react";
import { connect } from "react-redux";
import { addItem, deleteItem, updateItem } from "./action";
import { Link } from 'react-router-dom';
import "./inventroy.css";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditPopup: false,
      showDeletePopup: false,
      itemToDelete:null,
      selectedItem: null,
      newName: "",
      newPrice: "",
      newQuantity: "",
      newSold: "",

      name:'',
      Price:'',
      quantity:'',
      sold:'',
    };
  }

  handleAddItem = () => {
    const newItem = {
      name: this.state.newName || "New Product",
      Price: this.state.newPrice || 0,
      quantity: this.state.newQuantity || 0,
      sold: this.state.newSold || 0,
    };

    this.props.addItem(newItem);

    // Reset the input fields after adding an item
    this.setState({
      newName: "",
      newPrice: "",
      newQuantity: "",
      newSold: "",
    });
  };

  handleUpdateItem = () => {
    const { selectedItem, newName, newPrice, newQuantity, newSold } = this.state;
    if (selectedItem) {
      const updatedItem = {
        ...selectedItem,
        name: newName || selectedItem.name,
        Price: newPrice || selectedItem.Price,
        quantity: newQuantity || selectedItem.quantity,
        sold: newSold || selectedItem.sold,
      };

      this.props.updateItem(updatedItem);
      this.handleCancelPopup();
    }
  };

  handleDeleteItem = () => {
    const { itemToDelete } = this.state;
    if (itemToDelete) {
      this.props.deleteItem(itemToDelete); // Pass the item directly
      this.handleCancelPopup();
    }
  };
  
//handlechangefuntion
handleInputChange = (e) => {
  const { name, value } = e.target;
  this.setState((prevState) => ({
    updateItem: {
      ...prevState.updateItem,
      [name]: value,
    },
  }));
};




  handleShowEditPopup = (item) => {
    this.setState({
      showEditPopup: true,
      selectedItem: item,
      updateItem:{
        name:item.name,
        Price:item.Price,
        quantity:item.quantity,
        sold:item.sold

      }
     
    });
  };

  handleDeletePopup = (item) => {
    this.setState({ showDeletePopup: true, itemToDelete: item });
  };
  
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
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.Price}</td>
                <td>{item.quantity}</td>
                <td>{item.sold}</td>
                <td>
                  <button className="Edit" onClick={() => this.handleShowEditPopup(item)}>
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
                  <input
                    type="text"
                    value={updateItem.name}
                    onChange={this.handleInputChange}
                  />
                  <input
                    type="text"
                    value={updateItem.Price}
                    onChange={this.handleInputChange}
                  />
                  <input
                    type="text"
                    value={updateItem.quantity}
                    onChange={this.handleInputChange}
                  />
                  <input
                    type="text"
                    value={updateItem.sold}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="Popup-button">
                <button className="yes" onClick={this.handleUpdateItem}>
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
  addItem: (item) => dispatch(addItem(item)),
  deleteItem: (itemName) => dispatch(deleteItem(itemName)),
  updateItem: (item) => dispatch(updateItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);


