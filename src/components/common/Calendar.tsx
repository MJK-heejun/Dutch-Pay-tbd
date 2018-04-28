import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { ICalendarProps } from 'dto/ICalendarProps';

export default class Calendar extends React.Component<ICalendarProps, any> {

  //task #1 - generate a calendar depending on the passed this.props.firstDay
  //task #2 - display total amount for each date based on its histories

  constructor(props:any){
    super(props);
    console.log(this.props.calendar);
    console.log(this.props.firstDay); //indicates the first day of the month. (e.g. Tuesday is the first day of 2018 May)
  }

  render() {
    return (
      <View>
        <Text>calendar view </Text>
      </View>
    );
  }
}