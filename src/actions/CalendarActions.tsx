import { Actions } from 'react-native-router-flux';
import { IHistoryDto, IDateDto, ICalendarDto } from 'dto';
import { Storage } from 'service';


export const getHistoriesByDate = (date:IDateDto) => {
    return (dispatch:any) => {
        Storage.GetHistoriesByDate(date).then((historyList:IHistoryDto[])=>{            
            dispatch({ 
                type: "UpdateCalendar", 
                payload: {date, historyList}
            });
        });
    }    
}