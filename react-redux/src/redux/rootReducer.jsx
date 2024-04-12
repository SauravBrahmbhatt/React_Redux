import { combineReducers } from "redux";
import { cakeReducer } from "./cakes/cakeReducer";
import { iceCreamReducer } from "./iceCream/iceCreamReducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});
