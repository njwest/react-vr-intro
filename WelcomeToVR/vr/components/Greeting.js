import React, { Component } from 'react';
import {
  Text
} from 'react-vr';


export default class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}
