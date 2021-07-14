import { actionCreator } from "./util";
import { ADD_TODO_ITEM } from "./actionTypes";

export const addTotoItem = (name) => actionCreator(ADD_TODO_ITEM, { name });
