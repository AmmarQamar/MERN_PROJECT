import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './../css/map.css';

const Currentlocation = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDt2aRdrd_41en1KKW2Gnxmk7cWGsgPnlk",
        // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,

    });
    if (!isLoaded) return <div>Loading...</div>
    return (
        <Map />
    )
}

function Map() {
    const center = useMemo(() => ({ lat: 33.6844, lng: 73.0479 }), []);
    return (
        <GoogleMap
            zoom={10}
            center={center}
            mapContainerClassName="map-container">
            <Marker position={center} />
        </GoogleMap>
    )
}
export default Currentlocation;