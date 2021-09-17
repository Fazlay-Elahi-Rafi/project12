import { createStore, combineReducers } from "redux";
import ProductsReducer from "./reducers/ProductsReducer";
import CartReducer from "./reducers/CartReducer";
import MenuReducer from "./reducers/MenuReducer";

const root = combineReducers({
  ProductsReducer,
  CartReducer,
  MenuReducer,
});
const store = createStore(root);
export default store;
