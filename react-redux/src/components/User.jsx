import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserResponse } from "../redux";

function User() {
  const userData = useSelector((state) => state.user);
  console.log(userData);
  const dispatch = useDispatch();
  return <div>User</div>;
}

export default User;
