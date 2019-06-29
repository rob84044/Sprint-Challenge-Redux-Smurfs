import {
  LOAD_START,
  ADD_SMURF,
  UPDATE_SMURF,
  DELETE_SMURF,
  SMURF_FAILURE
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

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case LOAD_START:
      return {
        ...state,
        error: '',
        fetchingSmurfs: true
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        fetchingSmurfs: false,
        error: '',
        addSmurf: true
      };
    case UPDATE_SMURF:
      const index = state.findIndex(smurf => smurf.id === action.payload.id);
      /* This was obtained from https://stackoverflow.com/questions/46790746/update-array-object-in-react-redux-reducer */
      return [
        ...state.slice(0, index),
        {
          ...state,
          error: action.payload,
          fetchingSmurfs: false,
          updateSmurf: true
        }
      ];
      console.log(state.smurfs);
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => !action.payload),
        fetchingSmurfs: false,
        deleteSmurf: true
      };
    case SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    default:
      return state;
  }
}

export default reducer;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
