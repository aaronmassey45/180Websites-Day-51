import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import Navbar from './navbar';
import Instruments from './instruments';
import '../App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container drum-kit">
          <Grid>
            <Row><h1>The Kyuudaime</h1></Row>
            <Row>

              <Instruments />
              <Col sm={6}></Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
