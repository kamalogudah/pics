import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
  state = { images: [] };

  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 58efbb6ba848923e35431f889b82914702afde6dc4bab980a7a3335aa43918c3'
      }
    });

    console.log(response.data.results);
    this.setState({ images: response.data.results });

  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: { this.state.images.length} images
      </div>
    );
  }
}

export default App;