import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function IceCream() {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <>
      <h2>No of iceCream- {numOfIceCream} </h2>
      <button onClick={() => dispatch(buyIceCream())}>buy cake</button>
    </>
  );
}

export default IceCream;
