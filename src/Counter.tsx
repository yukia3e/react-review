import React, { FC, useState } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  const reset = () => setCount(0);
  const increment = () => setCount((c) => c + 1); // refer the prev value

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>counnt</Statistic.Label>
        <Statistic.Value>{count}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <div className="ui two buttons">
          <Button color="red" onClick={reset}>
            Reset
          </Button>
          <Button color="green" onClick={increment}>
            +1
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Counter;
