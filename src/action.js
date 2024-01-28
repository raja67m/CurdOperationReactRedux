


export  const ADD_ITEM ="ADD_ITEM";
export const DELETE_ITEM="DELETE_ITEM";
export const UPDATE_ITEM="UPDATE_ITEM";

export const addItem=(item)=>{

return{
   type:"ADD_ITEM",
   palyload:item,
};
}

export const deleteItem=(itemid)=>{
   return{
      type:"DELETE_ITEM",
      palyload:itemid,
   };
}

export const updateItem=(item)=>{
   return{
 type:"UPDATE_ITEM",
 palyload:updateItem
   };
}