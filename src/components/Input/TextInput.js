import React, { useId } from 'react';

export default function TextInput(props) {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>{props?.label}</label>
      <input type="text" id={id} {...props} />
    </>
  );
}
