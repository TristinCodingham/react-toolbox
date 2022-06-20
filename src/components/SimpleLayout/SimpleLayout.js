import React, { useState } from 'react';

import Row from '../layout/Row';
import Col from '../layout/Col';
import Grid from '../layout/Grid';

import TextInput from '../Input/TextInput';
import NumberInput from '../Input/NumberInput';
import CurrencyInput from '../Input/CurrencyInput';
import Spacer from '../layout/Spacer';
import Border from '../layout/Border';
import currency from 'currency.js';
import useStateReducer from '../../utils/hooks/useStateReducer';
import { ACTIONS } from '../../context/reducer';
import Button from '../Input/Button';
import useArray from '../../utils/hooks/useArray';
import useAsync from '../../utils/hooks/useAsync';
import useEventListener from '../../utils/hooks/useEventListener';

export default function SimpleLayout() {
  const [money, setMoney] = useState(1100);
  const [{ count }, dispatch] = useStateReducer();
  const items = [200, 1000, 56, 201];
  const {
    array,
    set,
    pushStart,
    pushEnd,
    insert,
    update,
    reorder,
    filter,
    sort,
    reverse,
    remove,
    reset,
    clear,
  } = useArray(items);
  const callback = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        return success ? resolve('Success') : reject('Error');
      }, 2000);
    });
  };
  const { value, isLoading, error } = useAsync(callback, []);

  const { value: windowWidth } = useEventListener(
    'resize',
    () => window.innerWidth
  );
  console.log({ windowWidth });
  return (
    <>
      <Row cols={10}>
        <Col span={9}>
          <div style={{ backgroundColor: 'green' }}>Test</div>
        </Col>
        <Col>
          <div style={{ backgroundColor: 'red' }}>Test</div>
        </Col>
      </Row>

      <Spacer height="300px">
        <Border padding="5px 20px">
          <Grid direction="column" justify="center">
            <TextInput label="Email" />
            <CurrencyInput
              value={money}
              onChange={({ target }) => {
                console.log({ target: target.value });
                const { value } = currency(target.value);
                console.log({ value });
                console.log({ money });
                setMoney(value);
              }}
            />
            <NumberInput
              value={count}
              onChange={({ target }) =>
                dispatch({ type: ACTIONS.SET_COUNT, payload: target.value })
              }
            />
          </Grid>
        </Border>
      </Spacer>
      <Grid direction="column" justify="space-around">
        <Button onClick={() => set(items)}>Set</Button>
        <Button onClick={() => pushStart(95)}>PushStart</Button>
        <Button onClick={() => pushEnd(67)}>PushEnd</Button>
        <Button onClick={() => insert(1, 700)}>Insert </Button>
        <Button onClick={() => update(1, 800)}>Update</Button>
        <Button onClick={() => reorder(1, 3)}>Reorder</Button>
        <Button onClick={() => filter((value) => value === 95)}>Filter</Button>
        <Button onClick={() => sort((a, b) => a - b)}>Sort</Button>
        <Button onClick={() => reverse()}>Reverse</Button>
        <Button onClick={() => remove(1, 2)}>Remove</Button>
        <Button onClick={() => reset()}>Reset</Button>
        <Button onClick={() => clear()}>Clear</Button>
      </Grid>
      <Grid direction="column" justify="space-around">
        {array.join(', ')}
      </Grid>
      <Grid direction="row" justify="space-around">
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            {value}
            {error}
          </>
        )}
      </Grid>
    </>
  );
}
