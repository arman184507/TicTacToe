import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "1px solid black",
        height: "100px",
        width: "100px",   // fixed width
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        cursor: "pointer",
      }}
      className="square"
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;