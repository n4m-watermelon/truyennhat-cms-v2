import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    //   async action
    return;
  }
);
const slice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.entities.push(action.payload);
    });
  },
});
export default slice.reducer;
const { loginSuccess, logoutSuccess } = slice.actions;
export const login =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      dispatch(loginSuccess({ username }));
    } catch (e) {
      return console.error(e.message);
    }
  };
export const logout = () => async (dispatch) => {
  try {
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};
