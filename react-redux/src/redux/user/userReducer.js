import {
  ERROR_USER_REQUEST,
  FETCH_USER_REQUEST,
  SUCSESS_USER_REQUEST,
} from "./userTypes";

const intialstate = {
  loading: false,
  users: [],
  error: "",
};

export const userReducer = (state = intialstate, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SUCSESS_USER_REQUEST:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case ERROR_USER_REQUEST:
      return {
        loading: false,
        user: [],
        error: action.payload,
      };
  }
};
