import { ICalendarDto } from "./ICalendarDto";
import { DayEnum } from "enum";

export interface ICalendarProps{
    calendar : ICalendarDto
    firstDay: DayEnum
}