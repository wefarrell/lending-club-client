import React, { Component } from 'react';
import './Page.css'; /* optional for styling like the :hover pseudo-class */
import Map from './Map';
import BubbleChart from './BubbleChart/index'
const API_URL = 'https://stormy-escarpment-35450.herokuapp.com'
const MAP_WIDTH = 500

class Page extends Component {
  state = {
    stateData: null
  };
  changeState = (state) => {
    const self = this;
    fetch(`${API_URL}/states/${state}`)
      .then((response) => response.json())
      .then((stateData) => self.setState({stateData: stateData}));
  };
  render() {
    return (
      <div className="row">
        <div className="column">
          <Map handleStateChange={this.changeState} width={MAP_WIDTH}></Map>
        </div>
        <div class="column">
          <BubbleChart loanData = {this.state.stateData}></BubbleChart>
        </div>
      </div>
    );
  }
}

export default Page;
