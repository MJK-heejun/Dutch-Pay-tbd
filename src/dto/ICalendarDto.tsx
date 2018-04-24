import { IHistoryDto } from "./IHistoryDto";

export interface ICalendarDto{
    [date:string] : IHistoryDto[] //date : JSON.stringify(IDateDto)
}