import { combineReducers } from 'redux';
import CalendarReducer from './CalendarReducer';
import DateSelectionReducer from './DateSelectionReducer';
import HistoryListReducer from './HistoryListReducer';
import HistorySelectionReducer from './HistoryselectionReducer';

export default combineReducers({  
  calendarSummary: CalendarReducer,
  selectedDate: DateSelectionReducer,  
  historyList: HistoryListReducer,
  selectedHistoryId: HistorySelectionReducer
});
