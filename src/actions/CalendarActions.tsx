import { Actions } from 'react-native-router-flux';
import { IHistoryDto, IDateDto, ICalendarDto } from 'dto';
import { Storage } from '../helper';


export const getHistoriesByDate:any = (date:IDateDto) => {
    return (dispatch:any) => {
        Storage.GetHistories(date).then((historyList:IHistoryDto[])=>{            
            dispatch({ 
                type: "UpdateCalendar", 
                payload: {date, historyList}
            });
        });
    }
}