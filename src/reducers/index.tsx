import { combineReducers } from 'redux';
import CalendarReducer from './CalendarReducer';
import DateSelectionReducer from './DateSelectionReducer';

export default combineReducers({  
  calendarSummary: CalendarReducer,
  selectedDate: DateSelectionReducer
});
