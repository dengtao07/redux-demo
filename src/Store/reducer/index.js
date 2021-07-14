import { todoItem } from "./todoItem";
import { changeInputVal } from "./changeInputVal";
import { combineReducers } from "redux";

export default combineReducers({
  listStore: todoItem,
  inputValStore: changeInputVal
});
