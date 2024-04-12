import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function Cake({ numOfCakes, buyCake }) {
  return (
    <>
      <h2>No of cakes- {numOfCakes} </h2>
      <button onClick={() => buyCake()}>buy cake</button>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cake);
