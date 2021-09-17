import Fish from "./api/api";
import Chicken from "./api/api2";
import Pizza from "./api/api3";

const initState = {
  fish: Fish,
  chicken: Chicken,
  pizza: Pizza,

  product: {},
};

const ProductsReducer = (state = initState, action) => {
  if (action.type === "PRODUCT") {
    return {
      ...state,
      product: state.fish.find((product) => product.id === parseInt(action.id)),
    };
  } else if (action.type === "PRODUCT_TWO") {
    return {
      ...state,
      product: state.chicken.find(
        (product) => product.id === parseInt(action.id)
      ),
    };
  } else if (action.type === "PRODUCT_THREE") {
    return {
      ...state,
      product: state.pizza.find(
        (product) => product.id === parseInt(action.id)
      ),
    };
  } else {
    return state;
  }
};
export default ProductsReducer;
