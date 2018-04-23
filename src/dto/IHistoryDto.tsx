import { HistoryEnum, PersonEnum } from 'enum'

export interface IHistoryDto{
    amount:number,
    history_type:HistoryEnum,
    description:string,
    person_type:PersonEnum
}
