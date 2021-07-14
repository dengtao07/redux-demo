import { createStore } from "redux";
import reducer from "./reducer/index";
import todoItem from "./reducer/todoItem";

const Store = createStore(reducer);

export default Store;
