import React, { Component } from 'react';
import Tooltip from './Tooltip';
class App extends Component {
  constructor()
  {
      super();
      this.state={
        position:" "
      }
  }
  
  setPosition=(event)=>{
    this.setState({
      position:event.target.value
    })
  }
  render() {
    return ( 
      <div id="main">
        <select onChange={this.setPosition} id="selection">
            <option value=" " selected disabled hidden> 
                Select the position
            </option> 
            <option value="Left" className="option">Left</option>
            <option value="Right" className="option">Right</option>
            <option value="Top" className="option">Top</option>
            <option value="Bottom" className="option">Bottom</option>
          </select>
        <Tooltip position={this.state.position}/>
      </div>
    );
  }
}

export default App;

