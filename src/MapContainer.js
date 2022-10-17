import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
} from "@react-google-maps/api";

function MapContainer(props) {
  return (
    <div className="map-container">
      <Map
        google={props.google}
        zoom={14}
        initialCenter={{ lat: 51.501364, lng: -0.14189 }}
      ></Map>
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: process.env.api_key,
})(MapContainer);
