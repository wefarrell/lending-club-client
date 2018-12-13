import React, { Component } from 'react';
import './Map.css';
import USAMap from "react-usa-map";


class Map extends Component {
  state = {
    active: null
  };
  config = {};
  mapHandler = (event) => {
    const stateName = event.target.dataset.name;
    this.config = {[stateName] : {fill: 'blue'}};
    this.setState({active: stateName})
  };

  componentDidUpdate = (e, oldProps) => {
    if(oldProps.active !== this.state.active){
      this.props.handleStateChange(this.state.active)
    }
  };

  render() {
    return (
      <div className="Map">
        <USAMap
          customize={this.config}
          onClick={this.mapHandler}
          width={this.props.width}
        />
      </div>
    );
  }
}

export default Map;
