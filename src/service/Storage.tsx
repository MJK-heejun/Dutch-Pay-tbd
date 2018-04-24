import { AsyncStorage } from 'react-native'
import { IDateDto, IHistoryDto } from 'dto'
import { HistoryEnum, PersonEnum } from 'enum'


export class Storage {    

    public static async GetHistoriesByDate(date: IDateDto):Promise<IHistoryDto[]> {        
        let ids:string[] = await this.GetHistoryIds(date);
        let historyList:IHistoryDto[] = [];      

        await AsyncStorage.multiGet(ids, (err, stores) => {            
            stores.map((result, i, store) => {
              let key = store[i][0];
              let value = store[i][1];
              historyList.push(JSON.parse(value));
            });
          });     
        return historyList;
    }

    public static async GetHistoryIds(date: IDateDto):Promise<string[]> { 
        let key:string = JSON.stringify(date);
        let result = await AsyncStorage.getItem(key);
        let parsed:string[] = JSON.parse(result);
        return parsed == null ? [] : parsed;
    }

    public static async GetHistoriesById(historyId:number):Promise<IHistoryDto[]> { 
        let result = await AsyncStorage.getItem(historyId.toString());
        let parsed:IHistoryDto[] = JSON.parse(result);
        return parsed; 
    }

    public static async AddHistory(date: IDateDto, history:IHistoryDto):Promise<number> {
        let dateKey = JSON.stringify(date);
        let historyId = Date.now();        
        await this.addHistoryIdToList(dateKey, historyId.toString());
        await AsyncStorage.setItem(historyId.toString(), JSON.stringify(history));
        return historyId;
    }    

    private static async addHistoryIdToList(dateKey:string, historyId:string):Promise<void> {
        let idList:string[] = await this.getOldIdList(dateKey);
        idList.push(historyId);
        let newIdList = JSON.stringify(idList);
        await AsyncStorage.setItem(dateKey, newIdList);
    }
    private static async getOldIdList(dateKey:string) {
        let result = await AsyncStorage.getItem(dateKey);
        return result ? JSON.parse(result) : [];
    }

    private static async removeHistory(historyId: number) {
        AsyncStorage.removeItem(historyId.toString());
    }
};
