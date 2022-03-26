import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

const sliceAuth = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.getCurrentUser.matchPending, state => {
      state.isFetchingCurrentUser = true;
    });
    builder.addMatcher(
      authApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.getCurrentUser.matchRejected,
      state => {
        state.isFetchingCurrentUser = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, state => {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;
    });
  },
});

export default sliceAuth.reducer;

export const selectCurrentUser = state => state.auth.user;
