import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HookCake() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h2>No of cakes- {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </>
  );
}

export default HookCake;
