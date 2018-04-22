import { combineReducers } from 'redux';
import HistoryReducer from './HistoryReducer';

export default combineReducers({
  histories:  HistoryReducer,
  currentDate: () => [],
  currentHistories: () => [],
  currentHistory: () => []  
});
