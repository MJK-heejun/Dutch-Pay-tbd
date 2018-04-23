import { AsyncStorage } from 'react-native'

import { IDateDto, IHistoryDto } from 'dto'
import { HistoryEnum, PersonEnum } from 'enum'


export class Storage {    
    private static _instance:Storage = new Storage();

    constructor() { }

    public static GetInstance():Storage{
        if (!this._instance) {
            this._instance = new Storage();
        }            
        return this._instance;
    }

    public async GetHistoriesByDate(date: IDateDto):Promise<IHistoryDto[]> { 
        let ids:string[] = await this.GetHistoryIds(date);
        let result:IHistoryDto[] = [];
        await AsyncStorage.multiGet(ids, (err, stores) => {
            stores.map((result, i, store) => {
              let key = store[i][0];
              let value = store[i][1];
              result.push(JSON.parse(value));
            });
          });     
        return result;
    }

    public async GetHistoryIds(date: IDateDto):Promise<string[]> { 
        try{
            let key:string = JSON.stringify(date);
            let result = await AsyncStorage.getItem(key);
            let parsed:string[] = JSON.parse(result);
            return parsed;
        }catch(err){
            alert(err);
        }        
    }

    public async GetHistoriesById(historyId:number):Promise<IHistoryDto[]> { 
        try{
            let result = await AsyncStorage.getItem(historyId.toString());
            let parsed:IHistoryDto[] = JSON.parse(result);
            return parsed;
        }catch(err){
            alert(err);
        }        
    }

    public async AddHistory(date: IDateDto, history:IHistoryDto):Promise<number> {
        let dateKey = JSON.stringify(date);
        let historyId = Date.now();        
        this.addHistoryIdToList(dateKey, historyId);        
        await AsyncStorage.setItem(historyId.toString(), JSON.stringify(history));
        return historyId;
    }    



    private async addHistoryIdToList(dateKey:string, historyId:number) {
        let idList:number[] = await this.getOldIdList(dateKey);
        let newIdList = JSON.stringify(idList.push(historyId));
        AsyncStorage.setItem(dateKey, newIdList);       
    }
    private async getOldIdList(dateKey:string) {
        let result = await AsyncStorage.getItem(dateKey);
        return result ? JSON.parse(result) : [];        
    }


    private async removeHistory(historyId: number) {
        AsyncStorage.removeItem(historyId.toString());
    }

};
