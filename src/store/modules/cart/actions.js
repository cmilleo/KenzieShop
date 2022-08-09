import { ADD_ITEM, RMV_ITEM } from "./actionType";

export const addCart = (product) => ({ type: ADD_ITEM, product: product });

export const removeCart = (product) => ({ type: RMV_ITEM, product: product });
