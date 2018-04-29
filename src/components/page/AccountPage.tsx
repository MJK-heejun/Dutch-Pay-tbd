import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Button, Text } from 'native-base';

import HeaderSection from '../common/HeaderSection';
import { Storage } from '../../helper'

export default class AccountPage extends React.Component {

  constructor(props: any) {
    super(props)
    this.state = {}
    this._createAccount = this._createAccount.bind(this)
    this._loginAccount = this._createAccount.bind(this)
  }

  async _createAccount() {
    const uuid = Storage.GenerateBluzelleUUID()
    console.log(uuid)
  }

  async _loginAccount() {
    console.log('load account')
    const uuid = await Storage.GetBluzelleUUID()
    console.log(uuid)
    this.props.bluzelleInstance.connectBluzelle(uuid)
  }

  render() {
    return (
      <Container>
        <HeaderSection headerText={'Create Account'} />
        <Button full
          onPress={this._loginAccount}
        >
          <Text>Login Account</Text>
        </Button>
        <Button full
          onPress={this._createAccount}
        >
          <Text>New Account</Text>
        </Button>
      </Container>
    )
  }

}