import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

export default class Instrument extends Component {
  render() {
    return (
      <Col xs={4} className="Instrument">
        {this.props.letter}
      </Col>
    );
  }
}
