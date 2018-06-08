import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Navbar from './navbar';
import Drum from './Drum';

export default class App extends Component {
  state = { text: '' };

  componentDidMount() {
    document.addEventListener('keydown', e => {
      try {
        const key = e.key.toUpperCase();
        const audio = document.querySelector(`.${key}-sound`);
        this.setState({ text: audio.dataset.target });
        audio.play();
      } catch (err) {
        return;
      }
    });
  }

  updateViewer = sound => {
    this.setState({ text: sound });
  };

  render() {
    return (
      <div className="App" id="drum-machine">
        <Navbar />
        <div className="container drum-kit">
          <Grid>
            <Row>
              <h1>The Kyuudaime</h1>
            </Row>
            <Row>
              <Col sm={8} smOffset={2}>
                <h3 id="display">{this.state.text}</h3>
              </Col>
            </Row>
            <Row>
              <Drum updateViewer={this.updateViewer} />
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
