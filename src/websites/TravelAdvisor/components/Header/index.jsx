import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./styles.scss";

export default function Index() {
  return (
    <AppBar position="fixed" className="appbar">
      <Toolbar className="toolbar">
        <Typography variant="h5" className="title">
          Travel Advisor
        </Typography>
        <Box display="flex" className="right">
          <Typography variant="h6" className="">
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
          <div className="searchoverlay">
            <div className="searchicon">
              <SearchIcon />
            </div>
            <InputBase placeholder="Search..." className="searchinput" />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
