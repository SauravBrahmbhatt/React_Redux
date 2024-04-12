import axios from "axios";
import {
  FETCH_USER_REQUEST,
  SUCSESS_USER_REQUEST,
  ERROR_USER_REQUEST,
} from "./userTypes";

export const fetchUser = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const sucsessFetchUser = (users) => {
  return {
    type: SUCSESS_USER_REQUEST,
    payload: users,
  };
};

export const errorFetchUser = (error) => {
  return {
    type: ERROR_USER_REQUEST,
    payload: error,
  };
};

export const fetchUserResponse = () => {
  return (dispatch) => {
    dispatch(fetchUser);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(sucsessFetchUser(users));
      })
      .catch((error) => {
        dispatch(errorFetchUser(error.message));
      });
  };
};
