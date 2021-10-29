import Items from "./api/api1";
import api from "./api/data";

const initState = {
  data: api,
  item: Items,

  product: {},
};

const ProductsReducer = (state = initState, action) => {
  if (action.type === "PRODUCT") {
    return {
      ...state,
      product: state.data.find((product) => product.id === parseInt(action.id)),
    };
  }
  else if (action.type === "ADD_ITEMS") {
    return {
      ...state,
      product: state.item.find((product) => product.id === parseInt(action.id)),
    };
  }
  else {
    return state;
  }
};
export default ProductsReducer;
