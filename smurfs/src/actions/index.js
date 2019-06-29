import axios from 'axios';

export const LOAD_START = 'LOAD_START';
export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const SMURF_FAILURE = 'SMURF_FAILURE';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: LOAD_START });
  axios
    .get('http://localhost:5000/smurfs')
    .then(response => {
      console.log('Response:', response);
      response.data.forEach((item, index) => (item.id = index));
      dispatch({ type: SMURF_SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: SMURF_FAILURE, payload: err }));
};

export const addSmurfs = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post(`http://localhost:5000/smurfs`, smurf)
    .then(response => {
      response.data.forEach((item, index) => (item.id = index));
      dispatch({ type: SMURF_SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: SMURF_FAILURE, payload: err }));
};

export const updateSmurfs = (smurf, id) => dispatch => {
  dispatch({ type: UPDATE_SMURF });
  axios
    .put(`http://localhost:5000/smurfs/${id}`, smurf)
    .then(response => {
      response.data.forEach((item, index) => (item.id = index));
      dispatch({ type: SMURF_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: SMURF_FAILURE, payload: err });
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axios
    .delete(`http://localhost:5000/smurfs/${id}`)
    .then(response => {
      response.data.forEach((item, index) => (item.id = index));
      dispatch({ type: SMURF_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: SMURF_FAILURE, payload: err });
    });
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
