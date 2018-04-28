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


type Props = {};
export default class App extends React.Component<Props> {

  componentWillMount(){}

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


