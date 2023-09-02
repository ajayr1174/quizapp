import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface IQuestionSlice {
  question: [];
  status: string;
  score: number;
}

const initialState: IQuestionSlice = {
  question: [],
  status: "",
  score: 0,
};

export const getQuestion = createAsyncThunk("getQuestion", async () => {
  let response = await axios.get("https://opentdb.com/api.php?amount=15");
  let json = await response.data;
  return json;
});

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setScore: (state) => {
      state.score++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getQuestion.fulfilled, (state, action) => {
      state.status = "";
      state.question = action.payload.results;
    });
    builder.addCase(getQuestion.pending, (state) => {
      state.status = "Fetching Questions. Please wait a moment...";
    });
    builder.addCase(getQuestion.rejected, (state) => {
      state.status = "Failed to fetch data...";
    });
  },
});

export const { setScore } = questionSlice.actions;
export default questionSlice.reducer;
