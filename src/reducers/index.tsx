import { combineReducers } from 'redux';
import { IHistoryDto } from 'dto';

export default combineReducers({
  histories:  () => [],
  currentDate: () => [],
  currentHistories: () => [],
  currentHistory: () => []  
});
