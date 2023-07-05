import React, { Component } from 'react'
import  { MapContainer, GeoJSON, Popup, Marker } from 'react-leaflet';
import countries from './../data/countries.json';
import "leaflet/dist/leaflet.css";
import './map.css';
import markerIcon from "./water_drop.png";
import L from 'leaflet';

class WorldMap extends Component {
    state = {
        center: [0,0],
        zoom: 2,
    }
    componentDidMount() {
        console.log(countries);
    }
    countryStyle= {
        fillColor: "#d3d3d3",
        fillOpacity: 1,
        color: "black",
        weight: 2,
    
    }; 
    onEachCountry = (country, layer) => {
        const countryName = country.properties.ADMIN;
        console.log(countryName);
        layer.bindPopup(countryName  );
    }

    positions =  {
        id1: [ 58.4551,-78.1051],


    };
    customIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [17,27],
        className: 'single-event-marker',
    });

    handlePopupClick = (e) => {
        console.log('reached here')
        const map = e.target._map;
        map.setView([20, 20], 3);
    };

  


    render () {
        const {zoom, center} = this.state;
        return (
            <div>
                <h1 style={{textAlign:'center'}}>20 Years of Impact</h1>   
                <MapContainer 
                    
                    style = {{height: '80vh' }}
                    zoom={zoom}
                    center={center}
                >
                    <GeoJSON
                        style={this.countryStyle}
                        data = {countries.features}
                        onEachFeature={this.onEachCountry}
                    />
       
                    <Marker icon={this.customIcon} position={this.positions.id1} 
                        eventHandlers={{
                            click: (e) => {
                                const map = e.target._map;
                                map.setView([58.4551, -78.1051], 2);

                            }
                        }}

                    
                    >
                        <Popup >
                            <div className='colFlex boxSizing'>
                                <h1>The Pirursiivik greenhouse and social art project</h1>
                                <div className='rowFlex'>
                                    <div className='colFlex'>
                                        <h2>1,500</h2>
                                        <h3>TARGETED POPULATION</h3>
                                    </div>
                                    <hr></hr>
                                    <div className='colFlex'>
                                        <h2>4 years</h2>
                                        <h3>2017 to 2021</h3>
                                    </div>
                                </div>
                                <h2>Inukjuak, Nunavik, Quebec   Canada</h2>
                                <button>VIEW PROJECT</button>

                            </div>
                        </Popup>
                    </Marker>

                </MapContainer>
            </div>
        );
    }
} 
export default WorldMap;