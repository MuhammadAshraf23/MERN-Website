import React from "react";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import SlideShow from "./SlideShow";

export default function Home() {
  return (
    <Box sx={{width:'98%'}}>
      <Navbar />
      <SlideShow />
    </Box>
  );
}
