import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import {useSelector} from 'react-redux';

export default function MapAPI() {
  const {marker, address} = useSelector((state) => state.map);

  const MapComponent = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={15} defaultCenter={marker}>
        <Marker position={marker}>
          <InfoWindow position={marker}>
            <div>
              <span className="p-0 m-0">{address}</span>
            </div>
          </InfoWindow>
        </Marker>
      </GoogleMap>
    )),
  );

  return (
    <MapComponent
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={
        <div
          style={{
            position: 'relative',
            width: `100%`,
            height: `100%`,
          }}
        />
      }
      containerElement={
        <div
          style={{
            position: 'relative',
            width: `100%`,
            height: `100%`,
          }}
        />
      }
      mapElement={<div style={{height: `100%`}} />}
    />
  );
}
