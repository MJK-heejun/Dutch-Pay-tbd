import { ICalendarDto } from 'dto'

const INITIAL_STATE = {};
export default (state:ICalendarDto = INITIAL_STATE, action:any):ICalendarDto => {
  switch (action.type) {
    case "UpdateCalendar":
      let key:string = JSON.stringify(action.payload.date);
      return { ...state, [key]: action.payload.historyList };
    default:
      return state;
  }
};
