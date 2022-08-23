import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
import { useMediaQuery } from "react-responsive";
import "./style.scss";

export default function Index({
  coordinates,
  setCoordinates,
  setBounds,
  places,
}) {
  const [defaultCoordinates, setDefaultCoordinates] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setDefaultCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });
  return (
    <div className="mapcontainer">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBGaRSFuP-idTc312G2lELDBMRYo_jvqh4" }}
        defaultCenter={defaultCoordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={() => {}}
      >
        {places?.map((place, i) => {
          return (
            <div
              className="markerContainer"
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {isMobile ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <Paper elevation={3} className="paper">
                  <Typography
                    className="typography"
                    variant="subtitle2"
                    gutterBottom
                  >
                    {place.name}
                  </Typography>
                  <img
                    className="pointer"
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt=""
                  />
                  <Rating
                    name="read-only"
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                  />
                </Paper>
              )}
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
