import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { ICalendarProps } from 'dto/ICalendarProps';
import { DayEnum } from 'enum'
import { ICalendarDto, IHistoryDto, IDateDto } from '../../dto';
import { FakeStorage } from '../../fake';

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
    return (
      <View>
        <Text>calendar view </Text>
      </View>
    );
  }
}