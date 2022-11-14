import { combineReducers } from 'redux';
import { sessionErrorsReducer } from './session';
import { tweetErrorsReducer } from './tweet';

export default combineReducers({
  session: sessionErrorsReducer,
  tweeterrors: tweetErrorsReducer
});