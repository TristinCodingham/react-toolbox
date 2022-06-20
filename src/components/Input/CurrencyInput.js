import React, { useId } from 'react';
import currency from 'currency.js';

export default function CurrencyInput(props) {
  const id = useId();
  const { value } = props;

  const valueFormat = currency(value, {
    symbol: 'R',
    separator: ' ',
    precision: 2,
  }).format();

  console.log('valueFormat: ', valueFormat);

  return (
    <>
      <label htmlFor={id}>{props?.label}</label>
      <input type="text" id={id} {...props} value={valueFormat} />
    </>
  );
}
