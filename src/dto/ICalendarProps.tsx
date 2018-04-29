import { ICalendarDto } from "../dto";
import { DayEnum } from "../enum";

export interface ICalendarProps{
    calendar : ICalendarDto
    firstDay: DayEnum
}