import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Hidden,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import QuestionNoList from "../../components/QuestionNoList";
import Option from "../../components/Option";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setScore } from "../../redux/slices/question";
import CountdownTimer from "../../components/CoutdownTimer";

interface IQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
function Question() {
  const data = useSelector((state: RootState) => state.question);
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questionId: string = param.questionId || "0";
  const question: IQuestion = data.question[parseInt(questionId)];
  let options: string[] = [
    ...question.incorrect_answers,
    question.correct_answer,
  ];
  const [userChoice, setUserChoice] = useState("");
  const onClickHandler = (e: React.MouseEvent) => {
    const element = e.target as HTMLElement;
    setUserChoice(element.innerText);
    if (userChoice === question.correct_answer) {
      dispatch(setScore());
    }
    if (parseInt(questionId) < question.question.length) {
      navigate(`/question/${parseInt(questionId) + 1}`);
    }
  };

  const NextQuestion = () => {
    if (question.question.length - 1 > parseInt(questionId)) {
      navigate(`/question/${parseInt(questionId) + 1}`);
    }
  };
  const PrevQuestion = () => {
    if (parseInt(questionId) >= 0) {
      navigate(`/question/${parseInt(questionId) - 1}`);
    }
  };

  return (
    <>
      <Navbar />
      {data.status && data.question.length > 0 ? (
        <Typography>{data.status}</Typography>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "91vh",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "20%",
              height: "100%",
              overflowY: "scroll",
            }}
          >
            <QuestionNoList questionCount={data.question.length} />
          </Box>
          <Box
            sx={{
              width: "80%",
              height: "100%",
              padding: "4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CountdownTimer />
            <Box
              sx={{
                width: "100%",
                height: "80%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4">{question.question}</Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  height: "60%",
                  flexDirection: "column",
                }}
              >
                {options.length > 0 &&
                  options.map((q) => (
                    <Option optionText={q} onClick={onClickHandler} />
                  ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button variant="contained" onClick={PrevQuestion}>
                Prev
              </Button>
              <Button variant="contained" onClick={NextQuestion}>
                {parseInt(questionId) < question.question.length
                  ? "Next"
                  : "Submit"}
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Question;
