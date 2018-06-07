import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class extends Component {
  render() {
    const { key, src } = this.props.data;
    return (
      <Col
        xs={4}
        className="drum-pad"
        id={`${key}`}
        onClick={() => this.refs.audio.play()}
      >
        <audio id={`${key}`} className="clip" src={src} ref="audio" />
        {key}
      </Col>
    );
  }
}
