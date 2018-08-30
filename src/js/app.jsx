import React from 'react';
import SearchBar from './components/SearchBar';
import Information from './components/Information';
import History from './components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' id='jumbo'>
          <h1 className='text-center display-2'>Weather Application</h1>
        </div>
        <SearchBar />
        <div className='row'>
          <div className='col'>
            <Information />
          </div>
          <div className='col'>
            <History />
          </div>
        </div>
      </div>
    );
  }
}
