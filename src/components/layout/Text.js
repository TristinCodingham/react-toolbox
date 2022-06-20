import React from "react";

export default function Text(props) {
  return (
    <div
      style={{
        fontSize: props.size,
        textAlign: props.align,
        color: props.color,
      }}
    >
      {props.children}
    </div>
  );
}
