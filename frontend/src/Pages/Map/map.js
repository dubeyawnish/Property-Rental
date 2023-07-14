// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const MapContainer = () => {
//   const mapStyles = {
//     width: '100%',
//     height: '400px'
//   };

//   const location = {
//     lat: 12.993105, 
//     lng: 77.7029178
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyDpxvdJfUO-5zaZGLXUsxAhnYhMkpfyT64">
//       <GoogleMap
//         mapContainerStyle={mapStyles}
//         zoom={14}
//         center={location}
//       >
//         <Marker position={location} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapContainer;






import React, { Fragment } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MAP_API } from "../../config";
const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 12.993086279694678, 
  lng: 77.70289634232857
};
const Map = ()=>{
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${MAP_API}`  //need to define your google api key 
  })

const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  
  return <div style={{position:'relative'}}>
    
    {isLoaded ? <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={7}
    onLoad={onLoad}
    onUnmount={onUnmount}
  >
    { /* Child components, such as markers, info windows, etc. */ }
    <></>
  </GoogleMap>
  :<></>
    }

  </div>

  
}

export default Map;








