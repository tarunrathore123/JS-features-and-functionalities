import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";

import { getPlacesData } from "./api";

export default function Index() {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("All");

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
      setPlaces(data);
    });
    console.log(bounds);
  }, [coordinates.lat, coordinates.lng, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid
        container
        spacing={3}
        style={{ width: "100%", marginLeft: "0", marginTop: "3rem" }}
      >
        <Grid item xs={12} md={4}>
          <List
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            places={places}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  );
}
