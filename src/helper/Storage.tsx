import { AsyncStorage } from 'react-native'
import { IDateDto, IHistoryDto } from 'dto'


export class Storage {    
    public static async GetHistories(date: IDateDto):Promise<IHistoryDto[]> {       
        /* currently using AsyncStorage. Change it to whatever you want. */ 
        let dateKey = JSON.stringify(date);
        let result = await AsyncStorage.getItem(dateKey);
        let historyList:IHistoryDto[] = result == null ? [] : JSON.parse(result);
        return historyList;
    }

    public static async SetHistories(date: IDateDto, histories:IHistoryDto[]):Promise<void> {
        /* currently using AsyncStorage. Change it to whatever you want. */ 
        let dateKey = JSON.stringify(date);
        let values = JSON.stringify(histories);
        await AsyncStorage.setItem(dateKey, values);
    }   
};
