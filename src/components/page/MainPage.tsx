import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text  } from 'native-base';
import HeaderSection from '../common/HeaderSection';

export default class MainPage extends React.Component {
  render() {
    return (
      <View>
        <HeaderSection headerText={'Dutch Pay'} />
        <Button>
            <Text>test button </Text>
        </Button>        
      </View>
    )
  }
};
