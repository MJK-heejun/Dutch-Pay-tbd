import { AsyncStorage } from 'react-native'
import { IDateDto, IHistoryDto } from 'dto'
const uuidv1 = require('uuid/v1')

export class Storage {

  public static async GenerateBluzelleUUID():Promise<string> {
    const uuid = uuidv1();
    await AsyncStorage.setItem('bluzelle-uuid', uuid);
    return uuid;
  }

  public static async GetBluzelleUUID():Promise<string> {
    let key = await AsyncStorage.getItem('bluzelle-uuid');
    return key;
  }

  public static async GetHistories(date: IDateDto, bluzelle: any):Promise<IHistoryDto[]> {
    let dateKey = JSON.stringify(date);
    let result = await AsyncStorage.getItem(dateKey);
    let historyList:IHistoryDto[] = result == null ? [] : JSON.parse(result);
    return historyList;
  }

  public static async SetHistories(date: IDateDto, histories:IHistoryDto[], bluzelle: any):Promise<void> {
    // await bluzelle.create('mykey', { a: 13 });

    let dateKey = JSON.stringify(date);
    let values = JSON.stringify(histories);
    await AsyncStorage.setItem(dateKey, values);
  }

};
