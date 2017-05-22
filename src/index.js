import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

  const API_KEY = 'AIzaSyCJ4HU65aO2pxkXtRM-O31HSi4b5nXiUgU';

  const App = () => {
    return (
        <div>
          <SearchBar />
        </div>
    );
  }

ReactDOM.render(<App />, document.querySelector('.container'));
