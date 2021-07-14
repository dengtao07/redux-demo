import { actionCreator } from "./util";
import { CHANGE_INPUT } from "./actionTypes";

export const changeInput = (inputVal) =>
  actionCreator(CHANGE_INPUT, { inputVal });
