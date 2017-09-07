import React, { Component } from 'react';
import Instrument from './instrument';
import { Grid, Row, Col } from 'react-bootstrap'

const btns = [
  { key: "q", src: "" },   { key: "w", src: "" },  { key: "e", src: "" },
  { key: "a", src: "" }, { key: "s", src: "" }, { key: "d", src: "" },
  { key: "z", src: "" },  { key: "x", src: "" },  { key: "c", src: "" }
]

export default class Instruments extends Component {
  render() {
    const instruments = btns.map( (instrument) => {
      return <Instrument key={instrument.key} letter={instrument.key} src={instrument.src} />
    });

    return (
      <Col sm={6} className="Instruments">
        {instruments}
      </Col>
    );
  }
}
