import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class extends Component {
  handleClick = () => {
    const {
      updateViewer,
      data: { sound },
    } = this.props;
    this.refs[sound].play();
    updateViewer(sound);
  };

  render() {
    const { key, src, sound } = this.props.data;
    return (
      <Col xs={4} className="drum-pad" id={`${key}`} onClick={this.handleClick}>
        <audio
          id={`${key}`}
          className={`${key}-sound clip`}
          src={src}
          ref={sound}
          data-target={sound}
        />
        {key}
      </Col>
    );
  }
}
