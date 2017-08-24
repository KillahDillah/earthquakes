import React, { Component } from 'react';
import moment from "moment";


class EarthquakeInfo extends Component {
	render(){
		return(	
			<div className="col-sm-6" key={this.props.earthquake.id}>
			  <div className="card" >
			    <div className="card-block">
			      <h4 className="card-title">{this.props.earthquake.properties.place}</h4>
			      <h6 className="card-subtitle mb-2 text-muted">Magnitude: {this.props.earthquake.properties.mag}</h6>
			      <h6 className="card-subtitle mb-2 text-muted">Time: {moment(this.props.earthquake.properties.time).format('llll')}</h6>
			      <p className="card-text">Coordinates: {this.props.earthquake.geometry.coordinates}</p>

			      <a href={this.props.earthquake.properties.url} className="card-link">USGS Event Link</a>

			    </div>
			  </div>
			</div>
		)
	}

}
export default EarthquakeInfo;