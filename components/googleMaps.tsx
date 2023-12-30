import React from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

const containerStyle = {
  width: "w-full",
  height: "300px",
};

const accomodation = {
  lat: 45.608804842719735,
  lng: 10.68618426787891,
};

const beekite = {
  lat: 45.664826229191085,
  lng: 10.73049519240483,
};

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
    language: "de",
  });

  const [map, setMap] = React.useState(null);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={accomodation}
      zoom={16}
    >
      {/* Child components, such as markers, info windows, etc. */}

      <Marker
        position={accomodation}
        title="Benaco36 - Unterkunft"
        visible={true}
        clickable={false}
      ></Marker>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GoogleMaps;
