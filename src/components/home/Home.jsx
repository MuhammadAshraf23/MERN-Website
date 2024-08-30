import React from "react";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import Banner from "./Banner";
import Electronics from "./Electronics";
import SmartPhone from "./SmartPhone";

export default function Home() {
  return (
    <Box sx={{width:'98%'}}>
      <Navbar />
      <Banner />
      <Electronics />
      <SmartPhone />
    </Box>
  );
}
