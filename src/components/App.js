import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import Navbar from './navbar';
import Instruments from './instruments';
import '../App.css';

const keys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
const sounds = ['Boing', 'Conk', 'Side Stick', 'Snare', 'Closed HH', 'Kick', 'Clap', 'Open HH', 'Kick n Hat'];

export default class App extends Component {
  handleKeyPress = (e) => {
    if (keys.includes(e.key)) {
      const audio = document.getElementById(`${e.key}audio`);
      audio.play();
      const index = keys.indexOf(e.key);
      document.getElementById("viewer").innerHTML = sounds[index];
    }
  }

  render() {
    return (
      <div className="App" onKeyPress={this.handleKeyPress} tabIndex="0">
        <Navbar />
        <div className="container drum-kit">
          <Grid>
            <Row>
              <Instruments />
              <Col sm={6}>
                <Row><h1>The Kyuudaime</h1></Row>
                <Row>
                  <Col sm={8} smOffset={2}><h3 id="viewer"> </h3></Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
