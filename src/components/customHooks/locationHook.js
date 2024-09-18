import { useEffect, useState } from "react";

export const useGetLocation=()=>{

    const [position, setPosition] = useState({ latitude: null, longitude: null });

    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        });
      } else {
        console.log("Geolocation is not available in your browser.");
      }
    }, []);

    return position
}