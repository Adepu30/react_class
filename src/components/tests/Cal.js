import React from "react";

const Cal = (props) => {
  return (
    <>
      <div>
        <p className={props.className}>
          {props.a}+{props.b}={props.a + props.b}
        </p>
        <p className={props.className}>
          {props.a}-{props.b}={props.a - props.b}
        </p>
        <p className={props.className}>
          {props.a}*{props.b}={props.a * props.b}
        </p>
        <p className={props.className}>
          {props.a}/{props.b}={props.a / props.b}
        </p>
        {props.table(props.b).map((val, index) => {
          return <p key={"Math" + index}>{val}</p>;
        })}
      </div>
    </>
  );
};

export default Cal;
