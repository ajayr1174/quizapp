import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/slices/user";
import { useDispatch } from "react-redux";
import { getQuestion } from "../redux/slices/question";
import { AppDispatch } from "../redux/store";

export default function Customcard() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState<string>("");
  return (
    <Card sx={{ minWidth: "40%" }}>
      <FormControl sx={{ width: "100%" }}>
        <CardContent>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></TextField>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            fullWidth
            endIcon={<ArrowForwardIosIcon width="30rem" />}
            onClick={() => {
              dispatch(setUser(email));
              dispatch(getQuestion());
              navigate("/question/0");
            }}
          >
            start Quiz
          </Button>
        </CardActions>
      </FormControl>
    </Card>
  );
}
