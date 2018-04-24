/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import MainPage from './components/page/MainPage';
import SettingPage from './components/page/SettingPage';

//will delete
import { Storage } from './service';
import { IDateDto, IHistoryDto } from 'dto';
//import { PersonEnum, HistoryEnum } from 'enum';
import { AsyncStorage } from 'react-native'

type Props = {};
export default class App extends React.Component<Props> {

  componentWillMount(){

    let dateDummy:IDateDto = {
      year: 2018,
      month: 3,
      day: 10
    };
    let historyDummy:IHistoryDto = {
      amount: 10,
      history_type: 0,
      description: "some desposit description",
      person_type: 1
    };

    // Storage.AddHistory(dateDummy, historyDummy).then(()=>{
    //   console.log("successfully added history");
    // });

    // AsyncStorage.clear().then(()=>{
    //   console.log("successfully cleared");
    // });

    Storage.GetHistoriesByDate(dateDummy).then((response)=>{
      console.log("here's response");
      console.log(response);
    }).catch(error=>{
      console.log("FAAAAAAAAAAAAAAAILED");
      console.log(error);
    });
  }

  render() {
    return (      
      <Provider store={createStore(reducers)}>
        <Router>
          <Stack key="main-stack">
            <Scene key="main-page" component={MainPage} hideNavBar/>
            {/* <Scene key="setting-page" component={SettingPage} hideNavBar/> */}
          </Stack>        
        </Router>      
      </Provider>      


    );
  }
}


