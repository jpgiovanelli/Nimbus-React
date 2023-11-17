import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import styled from "styled-components";
import { Input } from "./style"
import './MapStyles.css';

const Primeiro_comp = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCCMOIQ531QdncjyHtAgNecv7zhF6ARKoA',
        language: 'pt-BR',
        region: 'BR',
        streetViewControl: false,
    });

    const [positions, setPositions] = useState([{ lat: -22.95, lng: -42.97 }]);    

    const mapOptions = {
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#ebe3cd"
                }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#523735"
                }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                {
                    "color": "#f5f1e6"
                }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#c9b2a6"
                }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#dcd2be"
                }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#ae9e90"
                }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#dfd2ae"
                }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#dfd2ae"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#93817c"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#a5b076"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#447530"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#f5f1e6"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#fdfcf8"
                }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#f8c967"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#e9bc62"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#e98d58"
                }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#db8555"
                }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                {
                    "visibility": "on"
                }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                {
                    "visibility": "on"
                }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#806b63"
                }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#dfd2ae"
                }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#8f7d77"
                }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [
                {
                    "color": "#ebe3cd"
                }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#dfd2ae"
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#b9d3c2"
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#92998d"
                }
                ]
            }
            ], 
    };

    const calcular_centro = () => {
        return {lat: positions[0].lat, lng: positions[0].lng}
    }

    const center = calcular_centro()


    const [selectedMarker, setMarker] = useState('')

    const fechar_info = () => {
        if (selectedMarker == '') return
        setMarker('')
    }

    return (
        <div className='mapa'>
        {isLoaded ? (
            <GoogleMap
            mapContainerStyle={{ width: '100', height: '100vh', display: 'flex', justifyContent: 'space-around'}}
            center={center}
            zoom={15}
            options={{ styles: mapOptions.styles }}
            onDrag={fechar_info}
            onClick={fechar_info}
            >
            {positions.map((position, index) => (
                <Marker key={index} position={position} onClick={e => setMarker({location: {lat: e.latLng.lat() + 0.001, lng: e.latLng.lng()}})} />
            ))}
            <Location setPositions={setPositions} />
            {
                selectedMarker &&
                <InfoWindow position={selectedMarker.location}>
                    <div>
                        <h1>Informações:</h1>
                        <p>(...)</p>
                        <p>(...)</p>
                        <p>(...)</p>
                    </div>
                </InfoWindow>
            }
            </GoogleMap>
            
        ) : <></>}
        </div>
    );
};

const Location = ({ setPositions }) => {

    const coordenates = () => {
        const cep = document.getElementById('cep').value
        const key = 'AIzaSyCCMOIQ531QdncjyHtAgNecv7zhF6ARKoA'

        const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${cep}`

        const promise = fetch(url)

        promise.then(response => response.json()).then(location => {
            try {
                const lat_lng = location.results[0].geometry.location
                setLat(lat_lng.lat)
                setLng(lat_lng.lng)
            } catch (error) {
                alert('O endereço não é válido! Tente novamente.')
                setLat(Lat)
                setLng(Lng)
            }
            
})

    }

    const [Lat, setLat] = useState(-22.95);
    const [Lng, setLng] = useState(-42.97);

    useEffect(() => {
        if (isNaN(Lat) || isNaN(Lng)) return;

        setPositions([{ lat: Lat, lng: Lng }]);
    }, [Lat, Lng, setPositions]);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className='lat-lng' style={{ position: 'relative', zIndex: 1, marginTop: 17, height: 25}}>
        <Input type='number' value={Lat} step={0.001} onChange={(e) => (setLat(parseFloat(e.target.value)))}></Input>
        <Input type='number' value={Lng} step={0.001} onChange={(e) => (setLng(parseFloat(e.target.value)))}></Input>
        </div>
        <div className='endereco' style={{ position: 'relative', zIndex: 1}}>
        <Input id='cep' type='text' placeholder='Coloque aqui um endereco ou CEP:' style={{width: 220}}></Input>
        <button onClick={coordenates}>Pesquisar</button>
        </div> 
        </div>
    );
};


export default Primeiro_comp;
