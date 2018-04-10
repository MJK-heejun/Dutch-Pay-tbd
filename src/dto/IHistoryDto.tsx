import { HistoryEnum, PersonEnum } from 'enum/DutchPayEnum'

export interface IHistoryDto{
    id:number,
    year:number,
    month:number,
    day:number,
    amount:number,
    history_type:HistoryEnum,
    description:string,
    person_type:PersonEnum
}
