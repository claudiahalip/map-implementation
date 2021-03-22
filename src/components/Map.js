import React, {useState} from 'react';
import { GoogleMap, useJsApiLoader, withGoogleMap, InfoWindow, Marker } from 'ç';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


const containerStyle = {
  width: '1200px',
  height: '600px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Map() {
  

  const API_KEY = process.env.REACT_APP_API_KEY
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
     
    </div>
  ) : <></>
}

export default React.memo(Map)
