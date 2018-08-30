import React from 'react';

export default class Information extends React.Component {
  render() {
    const { city } = this.props;
    return (
      <div className='card border-info'>
        <div className='card-header text-info'>City Information</div>
        <div className='card-body'>
          <h1 className='text-center'>{city.name}
            {city.weather && <img role='presentation' className='ml-2' src={ `//openweathermap.org/img/w/${city.weather[0].icon}.png` } />}
          </h1>
          {city.coord && <p className='text-center'>Lat/Long: {city.coord.lat},{city.coord.lon}</p>}
          <hr />
          <div className='row'>
            <div className='col-md-4 text-center'>
              <h5>Tempurature (F)</h5>
              {city.main && <p>{((city.main.temp * 9 / 5) - 459.67).toFixed(2)}</p>}
            </div>
            <div className='col-md-4 text-center'>
              <h5>Pressure</h5>
              {city.main && <p>{city.main.pressure}</p>}
            </div>
            <div className='col-md-4 text-center'>
              <h5>Humidity</h5>
              {city.name && <p>{city.main.humidity}%</p>}
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 text-center'>
              <h5>Lowest Temp (F)</h5>
              {city.main && <p>{((city.main.temp_min * 9 / 5) - 459.67).toFixed(2)}</p>}
            </div>
            <div className='col-md-4 text-center'>
              <h5>Highest Temp (F)</h5>
              {city.main && <p>{((city.main.temp_max * 9 / 5) - 459.67).toFixed(2)}</p>}
            </div>
            <div className='col-md-4 text-center'>
              <h5>Wind Speed</h5>
              {city.wind && <p>{city.wind.speed} mph</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
