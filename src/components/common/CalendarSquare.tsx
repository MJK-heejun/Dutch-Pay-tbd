import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Container } from 'native-base';


export default class CalendarSquare extends React.Component<ICalendarSquareProps, any> {

  constructor(props:ICalendarSquareProps){
    super(props); 
  }

  render() {

    return (
      <View style={{width: 50, height: 65, backgroundColor: 'powderblue', borderWidth:0.5, borderColor: 'black' }} >
        <Text style={{fontWeight: 'bold'}}> {this.props.day} </Text>
        <Text style={{color: 'blue'}}> {this.props.deposit} </Text>
        <Text style={{color: 'red'}}> {this.props.expense} </Text>
      </View>
    );
  }
}

interface ICalendarSquareProps{
  day: number
  deposit: number
  expense: number
}