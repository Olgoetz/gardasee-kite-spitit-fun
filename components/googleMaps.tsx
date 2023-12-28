import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "500px",
  height: "300px",
};

const center = {
  lat: 45.610252380371094,
  lng: 10.686793327331543,
};

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
    language: "de",
  });

  const [map, setMap] = React.useState(null);

  return isLoaded ? (
    <div className="mx-auto">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={center} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default GoogleMaps;
