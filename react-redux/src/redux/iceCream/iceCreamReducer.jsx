import { BUY_ICECREAM } from "./iceCreamTypes";

const intialstate = {
  numOfIceCream: 20,
};

export const iceCreamReducer = (state = intialstate, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};
