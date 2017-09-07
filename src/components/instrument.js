import React, { Component } from 'react';
import { Col } from 'react-bootstrap'

const keys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
const sounds = ['Boing', 'Conk', 'Side Stick', 'Snare', 'Closed HH', 'Kick', 'Clap', 'Open HH', 'Kick n Hat'];

export default class Instrument extends Component {
  handleClick = () => {
    if (keys.includes(this.props.letter)) {
      const audio = document.getElementById(`${this.props.letter}audio`);
      audio.play();
      const index = keys.indexOf(this.props.letter);
      document.getElementById("viewer").innerHTML = sounds[index];
    }
  }

  render() {
    let { letter, src } = this.props;
    return (
      <Col xs={4} className="Instrument" onClick={this.handleClick}>
        <audio src={src} id={`${letter}audio`}></audio>
        {letter}
      </Col>
    );
  }
}
