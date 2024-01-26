

export const ADD_ITEM ="ADD_ITEM";
export const DELETE_ITEM="DELET_EITEM";
export const UPDATE_ITEM="UPDATE_ITEM";


export const addItem=(item){

return{
   type:ADD_ITEM,
   palyload:item,
};
}

export const deleteItem=(deleteitem){
   return{
      type:DELETE_ITEM,
      palyload:deleteitem,
   };
}

export const updateItem=(updateitem){
   return{
 type:UPDATE_ITEM,
 palyload:updateItem
   };
}