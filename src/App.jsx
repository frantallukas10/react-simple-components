import React, { Component } from 'react';

import './App.css';
import Movies from './components/movies';
import Counter from './components/counter';

class App extends Component {
  state = {
    visible: true
  };

  handleShowLayout = layout => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    const showLayout = visible ? <Movies /> : <Counter />;
    return (
      <main className="container">
        <div className="mb-4">
          <button
            onClick={() => this.handleShowLayout({ id: 1 })}
            className="btn btn-primary btn-sm"
          >
            {visible ? 'Show Counter Component' : 'Show Movies Component'}
          </button>
        </div>
        {showLayout}
      </main>
    );
  }
}

export default App;
