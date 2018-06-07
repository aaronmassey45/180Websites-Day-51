import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Navbar from './navbar';
import Drum from './Drum';

export default class App extends Component {
  // handleKeyPress = e => {
  //   if (keys.includes(e.key)) {
  //     const audio = document.getElementById(`${e.key}audio`);
  //     audio.play();
  //     const index = keys.indexOf(e.key);
  //     document.getElementById('viewer').innerHTML = sounds[index];
  //   }
  // };

  render() {
    return (
      <div
        className="App"
        onKeyPress={this.handleKeyPress}
        tabIndex="0"
        id="drum-machine"
      >
        <Navbar />
        <div className="container drum-kit">
          <Grid>
            <Row>
              <h1>The Kyuudaime</h1>
            </Row>
            <Row>
              <Col sm={8} smOffset={2}>
                <h3 id="display"> </h3>
              </Col>
            </Row>
            <Row>
              <Drum />
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
