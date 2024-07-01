// import React, { useState } from 'react';
// import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// import { MapModel } from '../../../model/community/ReceiverCreationModel';

// const containerStyle = {
//     width: '100%',
//     height: '400px'
// };

// const center = {
//     lat: -3.745,
//     lng: -38.523
// };

// interface IProps {
//     clickedLocation: MapModel;
//     setClickedLocation: () => void;
// }

// function MapComponent() {
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: 'AIzaSyDCem_6fvhccSrm6U1cEUQLPEJfEeuxcNY'
//     });

//     const [map, setMap] = useState(null);
//     const [clickedLocation, setClickedLocation] = useState(null);

//     const onLoad = React.useCallback(function callback(map) {
//         setMap(map);
//     }, []);

//     const onUnmount = React.useCallback(function callback(map) {
//         setMap(null);
//     }, []);

//     const handleClick = (event) => {
//         const lat = event.latLng.lat();
//         const lng = event.latLng.lng();
//         setClickedLocation({ lat, lng });
//     };

//     return isLoaded ? (
//         <div>
//             <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={10}
//                 onLoad={onLoad}
//                 onUnmount={onUnmount}
//                 onClick={handleClick}
//             >
//                 {clickedLocation && (
//                     <Marker position={clickedLocation} />
//                 )}
//             </GoogleMap>
//         </div>
//     ) : <></>
// }

// export default React.memo(MapComponent);
