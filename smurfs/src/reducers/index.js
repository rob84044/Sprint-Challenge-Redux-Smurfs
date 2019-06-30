import {
  LOAD_START,
  ADD_SMURF,
  UPDATE_SMURF,
  DELETE_SMURF,
  SMURF_FAILURE,
  SMURF_SUCCESS
} from '../actions';
/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addSmurf: false,
  updateSmurf: false,
  deleteSmurf: false,
  error: null
};
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
   
 }
*/

export const reducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case LOAD_START:
      return {
        ...state,
        error: null,
        fetchingSmurfs: true
      };
    case ADD_SMURF:
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        smurfs: [...state.smurfs]
      };
    case UPDATE_SMURF:
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        smurfs: [...state.smurfs]
      };
    case DELETE_SMURF:
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        smurfs: [...state.smurfs]
      };
    case SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    case SMURF_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
