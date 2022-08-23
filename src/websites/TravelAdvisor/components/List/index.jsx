import React, { createRef, useEffect, useState } from "react";
import PlaceDetails from "../PlaceDetails";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import "./style.scss";

export default function Index({
  places,
  type,
  setType,
  rating,
  setRating,
  childClicked,
  isLoading,
}) {
  const [elRefs, setElRefs] = useState([]);

  //   useEffect(() => {
  //     setElRefs((refs) =>
  //       Array(places.length)
  //         .fill()
  //         .map((_, i) => refs[i] || createRef())
  //     );
  //   }, [places]);
  return (
    <div className="container">
      <Typography variant="h4">
        Restaurents, Hotels and Attractions around you
        <FormControl className="formcontrol">
          <InputLabel id="type">Type</InputLabel>
          <Select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="firstinput"
          >
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="formcontrol">
          <InputLabel id="rating">Rating</InputLabel>
          <Select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="rating"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="3">Above 3.0</MenuItem>
            <MenuItem value="4">Above 4.0</MenuItem>
            <MenuItem value="4.5">Above 4.5</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={3} className="list">
          {places?.map((place, i) => (
            <Grid ref={elRefs[i]} key={i} item xs={12}>
              <PlaceDetails
                selected={Number(childClicked) === i}
                refProp={elRefs[i]}
                place={place}
              />
            </Grid>
          ))}
        </Grid>
      </Typography>
    </div>
  );
}
