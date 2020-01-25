import React from "react";
import data from '../components/sample.json'
import {Home} from '../components'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
  }

  render() {
    return (
      <Home data={this.state.data} />
    );
  }
}

export default HomePage;
