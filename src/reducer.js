import { ADD_ITEM,DELETE_ITEM,UPDATE_ITEM } from "./action";
import { createStore } from "redux";
import JSON from "./InventroyData.json";

const initailstate={
   items:JSON,
}


const itemReducer=(state=initailstate,action)=>{
switch(action.type){

case ADD_ITEM:
   return{
      ...state,
      items:[...state.items,action.payload],
   };


   // delete the product 
   case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.name!== action.payload.name),
      };

      

case UPDATE_ITEM:
  return {
    ...state,
    items: state.items.map((item) => {
      if (item.name === action.payload.name) {
        return {
          ...item,
          name: action.payload.name,
          Price: action.payload.Price,
          quantity: action.payload.quantity,
          sold: action.payload.sold,
        };
      }
      return item;
    }),
  };



      default:
         return state;
}

}

const store=createStore(itemReducer);
export default store;