import { IDateDto, IHistoryDto } from 'dto'

var json = require('./Histories.json');
export class FakeStorage {
    public static async GetHistoriesByDate(date: IDateDto):Promise<IHistoryDto[]> {        
        return json;        
    }
    public static async SetHistories(date: IDateDto, histories:IHistoryDto[]):Promise<void> {}      
};
