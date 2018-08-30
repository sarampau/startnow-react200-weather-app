import React from 'react';
import { searchInput, getWeather } from './searchBarActions';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLink = this.handleLink.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleLink(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(searchInput(value));
  }

  handleInput(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(searchInput(value));
  }

  handleClick() {
    const { input, dispatch } = this.props;
    dispatch(getWeather(input));
  }

  render() {
    return (
      <div className='container'>
        <button type='button' value='San Diego' onClick={ this.handleLink } className='btn btn-primary'>San Diego</button>
        <button type='button' value='New York' onClick={ this.handleLink } className='btn btn-primary'>New York</button>
        <button type='button' value='District of Columbia' onClick={ this.handleLink } className='btn btn-primary'>District of Columbia</button>
        <button type='button' value='London' onClick={ this.handleLink } className='btn btn-primary'>London</button>
        <button type='button' value='Tokyo' onClick={ this.handleLink } className='btn btn-primary'>Tokyo</button>
        <div className='row'>
          <div className='input-group mb-3'>
            <input className='form-control' type='text' placeholder='' value={ this.props.input } onClick={ this.handleInput } />
            <div className='input-group-append'>
              <button className='btn btn-outline-secondary' type='button' onClick={ this.handleClick }>Get weather!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
