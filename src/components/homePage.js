import React from "react";
import {Home} from '../components'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data = ''
    }
  }

  render() {
    return (
      <Home data={this.state.data} />
    );
  }
}

export default HomePage;
