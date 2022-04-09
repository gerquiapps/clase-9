import React from 'react';
import Sphere from './clock-elements/sphere';
import Hands from './clock-elements/hands';
import Numbers from './clock-elements/numbers';
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="wrapper">
        <Sphere />
        <Numbers />
        <Hands />
      </div>
    );
  }
}