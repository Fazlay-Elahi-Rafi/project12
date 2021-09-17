const init = {
  active: true,
  two: false,
  three: false,
  four: false,
  five: false,
};

const MenuReducer = (state = init, action) => {
  if (action.type === "SHOW") {
    return {
      active: true,
      two: false,
      three: false,
      four: false,
      five: false,
    };
  } else if (action.type === "TWO") {
    return {
      active: false,
      two: true,
      three: false,
      four: false,
      five: false,
    };
  } else if (action.type === "THREE") {
    return {
      active: false,
      two: false,
      three: true,
      four: false,
      five: false,
    };
  } else if (action.type === "FOUR") {
    return {
      active: false,
      two: false,
      three: false,
      four: true,
      five: false,
    };
  } else if (action.type === "FIVE") {
    return {
      active: false,
      two: false,
      three: false,
      four: false,
      five: true,
    };
  } else {
    return state;
  }
};

export default MenuReducer;
