import React from 'react';

import Row from './layout/Row';
import Col from './layout/Col';

import dudeWithTrumpet from './assets/dummy/dude-with-trumpet.jpg';
import mixer from './assets/dummy/mixer.jpg';
import recordPlayer from './assets/dummy/record-player.jpg';

function App() {
  return (
    <React.Fragment>
      <Row cols={10}>
        <Col span={9}>
          <div style={{backgroundColor: 'green'}}>Test</div>
        </Col>
        <Col>
          <div style={{backgroundColor: 'red'}}>Test</div>
        </Col>
      </Row>

      <Row>
        <Col span={4}>
          <img src={dudeWithTrumpet} width="100%" alt="Dude with trumpet" />
        </Col>
        <Col span={2}>
          <img src={mixer} width="100%" alt="Mixer" />
        </Col>
        <Col span={6}>
          <img src={recordPlayer} width="100%" alt="Record player" />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default App;