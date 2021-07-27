import React, { Component } from 'react';
import DirectoryRoom from './DirectoryRoom';
import { ROOMS } from '../shared/rooms';

class MainRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: ROOMS
    };
  }

  render() {
    return <DirectoryRoom rooms={this.state.rooms} />
  }
}

export default MainRoom;