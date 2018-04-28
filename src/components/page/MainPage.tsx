import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text  } from 'native-base';
import HeaderSection from '../common/HeaderSection';
import Calendar from '../common/Calendar';


import { connect, DispatchProp } from 'react-redux';
import { FakeStorage } from '../../fake';
import { Storage } from '../../helper'
import { IDateDto, IHistoryDto, ICalendarDto } from 'dto'

import { getHistoriesByDate } from '../../actions';
import { DayEnum } from '../../enum';

class MainPage extends React.Component<DispatchProp<any>, any> {

  constructor(props:any) {
    super(props);

    //to be removed
    console.log("this props....");
    console.log(props);

    let tmpCalendar:ICalendarDto = this.getTmpData();
    this.state = {
      tmpCalendar: tmpCalendar
    };
  }

  componentWillMount(){    
    //this.initFakeCalendar();
    //this.readStorageTest();
    let currentDate:IDateDto = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      day: 1
    };
    //this.props.getHistoriesByDate(currentDate); //need to fix this later....
  }


  render() {
    let calendar:ICalendarDto = this.state.tmpCalendar;
    let tmpDay:DayEnum = DayEnum.thursday;
    return (
      <View>
        <HeaderSection headerText={'Dutch Pay'} />
        <Calendar calendar={calendar} firstDay={tmpDay} />      
      </View>
    )
  }

  //to be removed
  getTmpData(){
    let currentDate:IDateDto = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      day: 1
    };     
    let tmpCalendar:ICalendarDto = {};
    let dateKey = JSON.stringify(currentDate);
    let tmpHistories:IHistoryDto[] = FakeStorage.GetHistoriesByDate(null);
    tmpCalendar[dateKey] = tmpHistories;
    currentDate.day = 25;
    dateKey = JSON.stringify(currentDate);
    tmpCalendar[dateKey] = tmpHistories;
    return tmpCalendar;
  }

  //to be removed
  initFakeCalendar(){
    let histories:IHistoryDto[] = FakeStorage.GetHistoriesByDate(null);
    let date:IDateDto = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      day: 1
    }; 
    for (let i = 1; i < 28; i++) { 
      date.day = i;
      FakeStorage.SetHistories(date, histories);
    }    
    console.log("successfully added!!!");
  }
  //to be removed
  readStorageTest(){
    let date:IDateDto = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      day: 1
    };    
    console.log("will read storage");
    Storage.GetHistories(date).then((res)=>{
      console.log(res);
    }, (err)=>{
      console.log(err);
    });
  }

};


const mapStateToProps:any = (state:any) => {
  //state = all the state objects returned from reducer index
  let calendar:ICalendarDto = state.calendarSummary;
  return { calendar: calendar };  
};

export default connect<any, any, void>(mapStateToProps, {getHistoriesByDate})(MainPage);