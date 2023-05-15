import { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import "@reach/combobox/styles.css";
import "./../css/map.css";
const center = {
    lat: 33.684422,
    lng: 73.047882,
};

const containerStyle = {
    width: "100vw",
    height: "100vh",
};



function Currentlocation() {
    const [currentLocation, setCurrentLocation] = useState(null);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    const handleMarkerClick = (event) => {
        const { latLng } = event;
        const latitude = latLng.lat();
        const longitude = latLng.lng();

        setCurrentLocation({ lat: latitude, lng: longitude });
    };

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onClick={handleMarkerClick}
            >
                {currentLocation && <Marker position={currentLocation} />}
            </GoogleMap>
        </div>
    );
}
export default Currentlocation