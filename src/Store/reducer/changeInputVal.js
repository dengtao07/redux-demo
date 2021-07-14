import { createReducer } from "./util";
import { CHANGE_INPUT } from "../actions/actionTypes";

const defaultState = {
  inputVal: ""
};

export default createReducer(defaultState, {
  [CHANGE_INPUT](state, action) {
    return {
      ...state,
      inputVal: action.payload.inputVal
    };
  }
});
