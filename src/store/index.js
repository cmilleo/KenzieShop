import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./modules/cart/reducer";
import productsReducer from "./modules/products/reducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
