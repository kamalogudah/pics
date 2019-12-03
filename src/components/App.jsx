import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{

  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 58efbb6ba848923e35431f889b82914702afde6dc4bab980a7a3335aa43918c3'
      }
    });

  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;