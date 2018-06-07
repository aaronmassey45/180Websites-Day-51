import React from 'react';
import { Col } from 'react-bootstrap';

import Instrument from './instrument';
import { keys } from '../keysData';

export default () => {
  return (
    <Col sm={6} smOffset={3}>
      <h2>
        {keys.map(instrument => {
          return (
            <Instrument
              key={instrument.key}
              letter={instrument.key}
              src={instrument.src}
              data={{ ...instrument }}
            />
          );
        })}
      </h2>
    </Col>
  );
};
