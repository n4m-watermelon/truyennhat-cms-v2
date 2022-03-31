import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MangaApi from "../services/manga";
export const fetchAllManga = createAsyncThunk(
  "manga/fetchAllManga",
  async () => {
    const { data } = await MangaApi.getManga();
    return data;
  }
);
const slice = createSlice({
  name: "manga",
  initialState: {
    listManga: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllManga.fulfilled, (state, { payload }) => {
      state.listManga = payload;
    });
  },
});
const {} = slice.actions;
export default slice.reducer;
