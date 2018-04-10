const Realm = require('realm');
import { IDateDto, IHistoryDto } from 'dto/IDutchPayDto'
import { HistoryEnum, PersonEnum } from 'enum/DutchPayEnum'

export default class Storage {    
    private static _instance:Storage = new Storage();
    private realm:any = null;

    constructor() { 
        if(Storage._instance)
           throw new Error("Error: Instantiation failed. Use getInstance() instead");                
        this.instantiateRealm(()=>{ Storage._instance = this; });
    }

    public static getInstance():Storage{
        return Storage._instance;
    }

    public GetHistoryByYearMonth(year: number, month: number):IHistoryDto[] { //date
        let result:IHistoryDto[] = this.realm.objects('History').filtered(`year = ${year} AND month = ${month}`); 
        return result;        
    }

    public WriteHistory(history:IHistoryDto) {
        this.realm.create('History', history);
    }    

    private instantiateRealm(callBack:Function) : void {
        Realm.open({
            schema: [{
                name: 'History', 
                properties: {
                    id: 'int',
                    year: 'int',
                    month: 'int',
                    day: 'int',
                    amount: 'float',
                    description: 'string',                    
                    history_type: 'int', //enum deposit, expense                    
                    person_type: 'int' //enum host, partner
                }
            }]
          }).then((realm:any) => {            
            this.realm = realm;
            callBack();
          });  
    }
};
