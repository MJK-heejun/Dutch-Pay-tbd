import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { ICalendarProps } from 'dto/ICalendarProps';
import { DayEnum } from '../../enum'
import { ICalendarDto, IHistoryDto, IDateDto } from '../../dto';
import { FakeStorage } from '../../fake';
import { Container } from 'native-base';
import { DateUtil } from '../../helper'
import CalendarSquare from './CalendarSquare'

export default class Calendar extends React.Component<ICalendarProps, any> {

  //task #1 - generate a calendar depending on the passed this.props.firstDay
  //task #2 - display total amount for each date based on its histories

  constructor(props:any){
    super(props); 
    console.log(this.props.calendar);
    console.log(this.props.firstDay); //indicates the first day of the month. (e.g. Tuesday is the first day of 2018 May)    
    
    this.state = {
      tmpCalendar: this.getTmpCalendarObj(),
      tmpFirstday: DayEnum.wednesday
    };
  }

  getTmpCalendarObj():ICalendarDto{
    let tmpCalendar:ICalendarDto = {};
    let tmpHistories:IHistoryDto[] = FakeStorage.GetHistoriesByDate(null);
    let currentDate:IDateDto = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      day: 1
    };     
    tmpCalendar[JSON.stringify(currentDate)] = tmpHistories;   
    return tmpCalendar; 
  }

  render() {
    let firstDateKey = Object.keys(this.state.tmpCalendar)[0];
    let dateKeyObj:IDateDto = JSON.parse(firstDateKey);
    let firstDay = DateUtil.GetFirstDayOfMonth(dateKeyObj);
    console.log(firstDay);

    let dayArrays = Array.apply(null, {length: 31}).map(Number.call, Number);

    return (
      <Container>

        <View style={{flex: 1, flexDirection: 'row',  backgroundColor: 'grey', flexWrap: 'wrap'}}>
          {dayArrays.map((day:number) => {
            return (
            <CalendarSquare day={day} deposit={111} expense={333} />
            );
          })}
        </View>          

      </Container>
    );
  }
}