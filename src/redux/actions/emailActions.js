import {
  BOOK_DEMO,
  BECOME_DONOR,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  LOADING_DATA
} from "../types";
import axios from "axios";

//Get all posts
export const bookDemo = (data) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post("https://us-central1-project-lend-an-arm.cloudfunctions.net/api/bookdemo", data)
    .then((res) => {
        console.log(res)
      dispatch({
        type: BOOK_DEMO,
        payload: res.data,
      });
    })
    .catch((err) => {
        console.log(err.response)
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};
export const becomeDonor = (data) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post("https://us-central1-project-lend-an-arm.cloudfunctions.net/api/becomedonor", data)
    .then((res) => {
        console.log(res)
      dispatch({
        type: BECOME_DONOR,
        payload: res.data,
      });
    })
    .catch((err) => {
        console.log(err.response)
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};


//Clear errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

