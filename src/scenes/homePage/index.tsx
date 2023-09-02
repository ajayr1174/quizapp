import React from "react";
import FlexBox from "../../components/FlexBox";
import Customcard from "../../components/Customcard";
import { Box } from "@mui/material";
import Navbar from "../navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100vw",
          height: "90vh",
        }}
      >
        <FlexBox sx={{height: '100%', width: '100%'}}>
          <Customcard/>
        </FlexBox>
      </Box>
    </>
  );
}

export default Home;
