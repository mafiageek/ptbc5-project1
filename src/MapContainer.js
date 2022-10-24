import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function MapContainer(props) {
  // const [currentPosition, setCurrentPosition] = React.useState({
  //   lat: 41.3851,
  //   lng: 2.1734,
  // });

  // const onMarkerDragEnd = (e) => {
  //   const lat = e.latLng.lat();
  //   const lng = e.latLng.lng();
  //   setCurrentPosition({ lat, lng });
  //   console.log(currentPosition);
  // };

  const center = {
    lat: 41.3851,
    lng: 2.1734,
  };

  const mapStyles = {
    height: "30vh",
    width: "100%",
  };

  return (
    <LoadScript googleMapsApiKey={process.env.React_App_api_key}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={center}>
        {props.currentPosition.lat ? (
          <Marker
            position={props.currentPosition}
            onDragEnd={(e) => props.onMarkerDragEnd(e)}
            draggable={true}
          />
        ) : null}
      </GoogleMap>
    </LoadScript>
  );
}
