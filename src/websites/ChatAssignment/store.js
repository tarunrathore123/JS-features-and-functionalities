import { createStore } from "redux";
import thunk from "redux-thunk";
import { usersData, chats } from "./data";
import { reducer } from "./reducer";
import { applyMiddleware } from "redux";

const initial_state = {
  users: usersData,
  currentUser: usersData[0],
  activeUser: usersData[1],
  chats: chats,
};

const store = createStore(reducer, initial_state, applyMiddleware(thunk));

export default store;
