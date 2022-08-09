import { ADD_ITEM, RMV_ITEM } from "./actionType";

export const cartReducer = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
  switch (action.type) {
    case ADD_ITEM:
      const { product } = action;
      return [...state, product];
    case RMV_ITEM:
      const rmvProduct = action.product;
      const newCart = state.filter((prod) => prod.id !== rmvProduct.id);

      return newCart;
    default:
      return state;
  }
};
