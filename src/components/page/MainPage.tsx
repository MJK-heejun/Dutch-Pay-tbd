import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text  } from 'native-base';
import HeaderSection from '../common/HeaderSection';

import { connect, DispatchProp } from 'react-redux';




class MainPage extends React.Component<DispatchProp<any>> {

  //now this.props has { Histories: state.histories } object

  render() {
    return (
      <View>
        <HeaderSection headerText={'Dutch Pay...'} />
        <Button>
            <Text>test button </Text>
        </Button>        
      </View>
    )
  }
};


const mapStateToProps = (state:any) => {
  //state = all the state objects returned from reducer index
  return { Histories: state.histories };
  
};


export default connect(mapStateToProps, null)(MainPage);