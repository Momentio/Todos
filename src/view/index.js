import React, { Component } from 'react';
import { Provider } from "react-redux";
import Todos from '../components/Todos';

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <Provider store={this.props.store}>
        <Todos />
      </Provider>
    );
  }
}

export default App;