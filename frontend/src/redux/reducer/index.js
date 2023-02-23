import authreducer from "./authreduce";
import { combineReducers } from "redux";
import productreducer from "./productreducer";
import ErrorReducers from "./ErrorReducers";
const rootreducer = combineReducers({
  authreducer,
  ErrorReducers,
  productreducer,
});

export default rootreducer;
