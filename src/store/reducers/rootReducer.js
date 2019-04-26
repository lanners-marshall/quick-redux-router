import { combineReducers } from "redux";
import jokeReducer from "./jokeReducer";
import kanyeReducer from './kanyeReducer';

const rootReducer = combineReducers({
  joke: jokeReducer,
  kanye: kanyeReducer
});

export default rootReducer;