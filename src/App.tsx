/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import MainPage from './components/page/MainPage';
import SettingPage from './components/page/SettingPage';

type Props = {};
export default class App extends React.Component<Props> {

  componentWillMount(){
    console.log("test test test?");
    console.log("tesx"); 
  }

  render() {
    return (      
      <Router>
        <Stack key="main-stack">
          <Scene key="main-page" component={MainPage} hideNavBar/>
          <Scene key="setting-page" component={SettingPage} hideNavBar/>
        </Stack>        
      </Router>

    );
  }
}


