import React, { useId } from 'react';

export default function NumberInput(props) {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>{props?.label}</label>
      <input type="number" id={id} {...props} />
    </>
  );
}
