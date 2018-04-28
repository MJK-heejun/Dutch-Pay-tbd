import { IDateDto, IHistoryDto } from 'dto'
import { AsyncStorage } from 'react-native'

export class FakeStorage {
    public static GetHistoriesByDate(date: IDateDto):IHistoryDto[] {        
        return json;        
    }
    public static async SetHistories(date: IDateDto, histories:IHistoryDto[]):Promise<void> {
        let dateKey = JSON.stringify(date);
        let values = JSON.stringify(json);
        await AsyncStorage.setItem(dateKey, values);
    }      
};


var json = [
    {
      "amount": 3.00,
      "history_type": 1,
      "description": "some description",
      "person_type": 0
    },  
    {
      "amount": 83.77,
      "history_type": 0,
      "description": "battleground",
      "person_type": 1
    },  
    {
      "amount": 30.12,
      "history_type": 0,
      "description": "cake",
      "person_type": 1
    },  
    {
      "amount": 30.32,
      "history_type": 0,
      "description": "food",
      "person_type": 1
    },  
    {
      "amount": 30.1,
      "history_type": 0,
      "description": "game",
      "person_type": 0
    },  
    {
      "amount": 2.55,
      "history_type": 0,
      "description": "who are you",
      "person_type": 0
    },  
    {
      "amount": 1.77,
      "history_type": 1,
      "description": "obama obama",
      "person_type": 1
    },  
    {
      "amount": 30,
      "history_type": 0,
      "description": "singer",
      "person_type": 0
    },  
    {
      "amount": 30.00,
      "history_type": 1,
      "description": "who who who",
      "person_type": 0
    },  
    {
      "amount": 430.12,
      "history_type": 0,
      "description": "what what what",
      "person_type": 1
    },  
    {
      "amount": 130.12,
      "history_type": 1,
      "description": "what are you saying",
      "person_type": 1
    }                    
  ];
  