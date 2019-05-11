import React, { Component } from 'react';
import Checkout from './Checkout';

class App extends Component {
  render() {
    return (
      <div>
          <Checkout
            name={'Big Horn Cinema'}
            description={'Movie Tickets'}
            amount={1}
          />
      </div>
    );
  }
}

export default App;
