import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google-map'

class WeatherList extends Component {

  renderWeather = (cityData) => {
    const name = cityData.city.name
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273)
    const pressue = cityData.list.map(weather => weather.main.pressure)
    const humidity = cityData.list.map(weather => weather.main.humidity)
    const { lon, lat } = cityData.city.coord
    return (
      <tr key={name}> 
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td>
          <Chart color="orange" data={temps} units="C"/>
        </td>
        <td>
          <Chart color="green" data={pressue} units="hPa"/>
        </td>
        <td>
          <Chart color="black" data={humidity}  units="%"/>
        </td>
      </tr>  
    )
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.weather.map(this.renderWeather)
          }
        </tbody>
      </table>  
    )
  }
}

// {weather} ==> state.weather
function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)