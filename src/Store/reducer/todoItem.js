import { createReducer } from "./util";
import { ADD_TODO_ITEM } from "../actions/actionTypes";

const defaultState = {
  list: ["coding", "swimming"],
  totoNum: 0
};

export default createReducer(defaultState, {
  [ADD_TODO_ITEM](state, action) {
    return {
      ...state,
      list: [...state.list, action.payload.name]
    };
  }
});

// export default function reducer(state = defaultState, action) {
//   console.log(action);

//   switch (action.type) {
//     case ADD_TODO_ITEM:
//       return {
//         ...state,
//         list: [...state.list, action.payload.name]
//       };
//     case CHANGE_INPUT:
//       console.log(111);

//       return {
//         ...state,
//         inputVal: action.payload.inputVal
//       };
//     default:
//       return state;
//   }
// }
