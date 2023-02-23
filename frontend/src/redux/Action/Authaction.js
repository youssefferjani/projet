import axios from "axios";

import {
  CURRENT,
  FAIL,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../ActionTypes/AuthTypes";
import { alert_error } from "./Error";
export const register = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/client/register", data);
    dispatch({ type: REGISTER, payload: res.data });
    navigate("/Login");
  } catch (error) {
    error.response.data.errors.forEach((el) => {
      dispatch(alert_error(el.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const login = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/client/login", data);
    dispatch({ type: LOGIN, payload: res.data });
    navigate("/Products");
  } catch (error) {
    error.response.data.errors.forEach((el) => {
      dispatch(alert_error(el.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const get_current = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/client/current", config);
    dispatch({ type: CURRENT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const logout = () => {
  return { type: LOGOUT };
};