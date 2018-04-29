import { AsyncStorage } from 'react-native'
import { IDateDto, IHistoryDto } from '../dto'
import { HistoryEnum, PersonEnum, DayEnum } from '../enum'
import moment from 'moment';


export class DateUtil {
    //moment("2018-05-01").format('d') => 0~6 where 0 is sunday, 6 is saturday
    //cheatsheet https://devhints.io/moment
    public static GetCurrentMonth(){
        
    }

    public static GetFirstDayOfMonth(date: IDateDto):DayEnum{
        let dayValue = moment(`${date.year}-${date.month}-01`).format('d');
        return parseInt(dayValue);
    }

};
