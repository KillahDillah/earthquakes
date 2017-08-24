import React, { Component } from 'react';
import earthquakes from '../data/earthquakes';
import Info from './EarthquakeInfo';


console.log(earthquakes)

class Earthquakes extends Component {
	render(){
		return(
			<div className="quake-list">
  			<div className="row">
  				{earthquakes.features.map(function(quake){
  					return <Info key={quake.id} earthquake={quake}/>
  				})}
  			</div>
			</div>
		)
	}
}

export default Earthquakes;