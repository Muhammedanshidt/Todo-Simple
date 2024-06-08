import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decerement,
  reset,
} from "../../reduxToolkit.1/Counter/counterSlice";
const Counter = () => {
  const { count } = useSelector((state) => state.count);

  const dispatch = useDispatch();


  return (
    <div style={{ display: "flex", position: "relative" }}>
      <div
        style={{ width: "100vw", height: "100vh", backgroundColor: "skyblue" }}
      >
        <h1>{count}</h1>
      </div>
      <div
        style={{ position: "absolute", marginLeft: "47%", marginTop: "200px" }}
      >
        <div
          onClick={() => dispatch(increment())}
          style={{
            width: "full",
            height: "fit",
            backgroundColor: "darksalmon",
            cursor: "pointer",
            margin: "5px",
            padding: "7px",
            borderRadius: "20%",
            fontSize: "20px",
            fontWeight: "bolder",
            color: "white",
          }}
        >
          +
        </div>
        <div
          onClick={() => dispatch(reset("resetvalue"))}
          style={{
            width: "full",
            height: "fit",
            backgroundColor: "darksalmon",
            cursor: "pointer",
            margin: "5px",
            padding: "7px",
            borderRadius: "20%",
            fontSize: "20px",
            fontWeight: "bolder",
            color: "white",
          }}
        >
          Reset
        </div>
        <div
          onClick={() => dispatch(decerement())}
          style={{
            width: "full",
            height: "fit",
            backgroundColor: "darksalmon",
            cursor: "pointer",
            margin: "5px",
            padding: "7px",
            borderRadius: "20%",
            fontSize: "20px",
            fontWeight: "bolder",
            color: "white",
          }}
        >
          -
        </div>
      </div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "lightpink",
        }}
      >
        <h1>{count}</h1>
      </div>
    </div>
  );
};

export default Counter;
