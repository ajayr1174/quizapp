import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

interface IQuestionNoList {
  questionCount: number;
}


function QuestionNoList({ questionCount }: IQuestionNoList) {
  const navigate = useNavigate()
  const navigateToQuestion =(quesId:number = 1) =>{
    navigate(`/question/${quesId}`)
  }
  const renderList = () => {
    const listItems = [];
    for (let i = 1; i <= questionCount; i++) {
      listItems.push(
        <ListItem disablePadding onClick={() => navigateToQuestion(i -1)}>
          <ListItemButton>
            <ListItemText primary={`Question: ${i}`} />
          </ListItemButton>
        </ListItem>
      );
    }
    return listItems;
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
        }}
      >
        <List>{renderList()}</List>
      </Box>
    </>
  );
}

export default QuestionNoList;
