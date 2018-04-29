import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Button, Text } from 'native-base';

import HeaderSection from '../common/HeaderSection';
import { Storage } from '../../helper'
import BluzelleWrapper from '../../helper/BluzelleWrapper';

export default class AccountPage extends React.Component {

  constructor(props: any) {
    super(props)
    var bluzelleInstance = new BluzelleWrapper();
    this.state = {
      bluzelleInstance: bluzelleInstance
    }
    this._createAccount = this._createAccount.bind(this)
    this._loginAccount = this._loginAccount.bind(this)
  }

  async _createAccount() {
    const uuid = Storage.GenerateBluzelleUUID()
    console.log(uuid)
  }

  async _loginAccount() {
    console.log('load account');
    const uuid = await Storage.GetBluzelleUUID();
    console.log(uuid);
    let aaa:any = this.state;
    let test = await aaa.bluzelleInstance.connectBluzelle("e391d9b4-cea5-4e5a-ae3d-f9fbf3785871");

    console.log("connect successful");
    aaa.bluzelleInstance.create('mykeyjamthjstrjdrjdrtjdrjes', { a: 13 }).then((res:any)=>{
      console.log(res);

      // console.log("mykey saved");
      // const value = aaa.bluzelleInstance.read('mykeyjames');
      // console.log("it's connected!!!! ");
      // console.log(value);      
    }, (err:any)=>{
      console.log("why u failed?");
      console.log(err);
    });

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
