import { actionTypes } from '../actions';

const defaultState = false;

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case (actionTypes.CORRECT_GUESS):
      return true;
    default:
      return state;
  }
};

export default reducer;
