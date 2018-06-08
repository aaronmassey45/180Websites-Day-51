import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
const { Header, Brand, Toggle, Collapse, Link, Text } = Navbar;

export default class extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Header>
          <Brand>
            <a href="https://aaronmassey.pro/">The Aaron Massey Project</a>
          </Brand>
          <Toggle />
        </Header>
        <Collapse>
          <Nav pullRight>
            <Text>
              <Link href="https://medium.com/@aaronmassey45">Blog</Link>
            </Text>
            <Text>
              <Link href="https://github.com/aaronmassey45">Github</Link>
            </Text>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
