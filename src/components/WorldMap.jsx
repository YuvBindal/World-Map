import React, { Component } from 'react'
import  { MapContainer, GeoJSON } from 'react-leaflet';
import countries from './../data/countries.json';
import "leaflet/dist/leaflet.css";
import './map.css';

class WorldMap extends Component {
    state = {}
    componentDidMount() {
        console.log(countries);
    }
    countryStyle= {
        fillColor: "red",
        fillOpacity: 1,
        color: "black",
        weight: 2,
    
    }; 
    onEachCountry = (country, layer) => {
        const countryName = country.properties.ADMIN;
        console.log(countryName);
        layer.bindPopup(countryName  );
    }
    render () {
        return (
            <div>
                <h1 style={{textAlign:'center'}}>Basic World Map</h1>   
                <MapContainer 
                    
                    style = {{height: '80vh' }}
                    zoom={2}
                    center={[0,0]}
                >
                    <GeoJSON
                        style={this.countryStyle}
                        data = {countries.features}
                        onEachFeature={this.onEachCountry}
                    />

                </MapContainer>
            </div>
        );
    }
} 
export default WorldMap;