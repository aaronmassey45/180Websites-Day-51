import React, { Component } from 'react';
import Instrument from './instrument';
import { Col } from 'react-bootstrap'

const btns = [
  { key: "q", src: "http://free-sounds.net/sound-files/special-effects/BOING_.WAV" },
  { key: "w", src: "http://free-sounds.net/sound-files/special-effects/CONK.WAV" },
  { key: "e", src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },
  { key: "a", src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" },
  { key: "s", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
  { key: "d", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { key: "z", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { key: "x", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { key: "c", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" }
]

export default class Instruments extends Component {
  render() {
    const instruments = btns.map( (instrument) => {
      return <Instrument key={instrument.key} letter={instrument.key} src={instrument.src} />
    });

    return (
      <Col sm={6} className="Instruments">
        <h2>{instruments}</h2>
      </Col>
    );
  }
}
