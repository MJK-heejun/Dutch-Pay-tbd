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


export default class MainPage extends React.Component {

  constructor(props:any) {
    super(props);
  }

  componentWillMount(){ }


  render() {
    let calendar:ICalendarDto = null;
    let tmpDay:DayEnum = DayEnum.thursday;
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
        <HeaderSection headerText={'Dutch Pay'} />
        <Calendar calendar={calendar} firstDay={tmpDay} />      
      </View>
    )
  }

};


