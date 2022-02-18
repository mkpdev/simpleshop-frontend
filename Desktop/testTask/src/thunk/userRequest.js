import axios from "axios";
import { setUser, setUserLogin, setToken, checkStatus, checkLoginStatus } from "../actions";

const client = axios.create({
  baseURL: 'https://2abb-2409-4043-293-97d6-fb77-6c5e-6cd6-5434.ngrok.io//api',
});

const config = {
  headers: {
    'Content-Type': "application/json",
  },
};
export const requestUser = (userdetail) => async (dispatch) => {

  try {
    const response = await client.post('/sign_up', userdetail, config);
    if (response.status === 201) {
      dispatch(checkStatus(true))
    }
    dispatch(setUser(response));
  } catch (err) {
    console.log(err);
  }
}

export const requestLoginUser = (loginDetails) => async (dispatch) => {

  try {
    const response = await client.post('/users/login', loginDetails, config);
    if (response.status === 200) {
      dispatch(checkLoginStatus(true))
    }
    dispatch(setUserLogin(response.data));
    localStorage.setItem('token', response.data.token)
    dispatch(setToken(response.data.token))
  } catch (err) {
    console.log(err);
  }
}








