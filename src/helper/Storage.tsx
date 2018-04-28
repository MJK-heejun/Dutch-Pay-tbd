import { AsyncStorage } from 'react-native'
import { IDateDto, IHistoryDto } from 'dto'
import { bluzelle as Default } from 'bluzelle'


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
    // await bluzelle.create('mykey', { a: 13 });

    let dateKey = JSON.stringify(date);
    let values = JSON.stringify(histories);
    await AsyncStorage.setItem(dateKey, values);
  }
};
