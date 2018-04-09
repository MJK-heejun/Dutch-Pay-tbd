const Realm = require('realm');
//import React, { Component } from 'react';
import { IHistoryDto } from 'dto/IHistoryDto'
import { HistoryEnum } from 'enum/HistoryEnum'
import { PersonEnum } from 'enum/PersonEnum'

// export default class Storage extends React.Component{
export default class Storage {    
    private static _instance:Storage = new Storage();

    private realm = null;

    constructor() { 
        if(Storage._instance)
           throw new Error("Error: Instantiation failed. Use getInstance() instead");                
        this.instantiateRealm(()=>{ Storage._instance = this; });
    }

    public static getInstance():Storage{
        return Storage._instance;
    }

    public GetDataByYearMonth(year: number, month: number):IHistoryDto { //date
        return { 
            id:1,
            year:1,
            month:1,
            day:1,
            amount:1,
            history_type: HistoryEnum.deposit,
            description: "",
            person_type: PersonEnum.host
        };
    }

    public WriteDataByYearMonthDay(year: number, month: number, day: number, data:any) { //date
        
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
                    history_type: 'int', //enum deposit, expense
                    description: 'string',
                    person_type: 'int' //enum host, partner
                }
            }]
          }).then((realm:any) => {            
            this.realm = realm;
            callBack();
          });  
    }
};
