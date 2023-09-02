import React from "react";
import FlexBox from "./FlexBox";
import { Typography } from "@mui/material";

interface IOption {
  optionText: string;
  onClick : (e:React.MouseEvent) => void
}

const Option = ({ optionText, onClick }: IOption) => {
  return (
    <>
      <FlexBox sx={{ width: "6vw" , border: '1px solid', padding: '0.7rem 10rem', borderRadius: '30px'}} onClick={onClick}>
        <Typography variant="h5">{optionText}</Typography>
      </FlexBox>
    </>
  );
};
export default Option;
