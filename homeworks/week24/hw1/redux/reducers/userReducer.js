import { createSlice } from '@reduxjs/toolkit';
import { loginAPI, registerAPI, getMe } from '../../WebAPI';
import { setAuthToken } from '../../utils';

const userReducer = createSlice({
  name: 'users',
  initialState: {
    user: null,
    isLoadingUser: false,
    errorMessage: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoadingUser: (state, action) => {
      state.isLoadingUser = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  setUser,
  setIsLoadingUser,
  setErrorMessage,
} = userReducer.actions;

export const register = (
  nickname,
  username,
  password,
) => dispatch => registerAPI(nickname, username, password)
  .then((res) => {
    if (res.ok === 0) {
      dispatch(setErrorMessage(res.message));
      return undefined;
    }
    setAuthToken(res.token);
    return getMe().then((resMe) => {
      if (resMe.ok !== 1) {
        setAuthToken(null);
        dispatch(setErrorMessage(resMe.toString()));
        return undefined;
      }
      dispatch(setUser(res.data));
      return res;
    });
  });

export const login = (username, password) => dispatch => loginAPI(username, password)
  .then((responseLogin) => {
    if (responseLogin.ok === 0) {
      dispatch(setErrorMessage(responseLogin.message));
      return undefined;
    }
    setAuthToken(responseLogin.token);
    return getMe().then((responseMe) => {
      if (responseMe.ok !== 1) {
        setAuthToken(null);
        dispatch(setErrorMessage(responseMe.toString()));
        return undefined;
      }
      dispatch(setUser(responseMe.data));
      return responseMe;
    });
  });

export const getUser = () => (dispatch) => {
  dispatch(setIsLoadingUser(true));
  getMe().then((res) => {
    if (res.ok) {
      dispatch(setUser(res.data));
      dispatch(setIsLoadingUser(false));
    }
  });
};

export default userReducer;
