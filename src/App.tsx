import * as React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import MainPage from './components/page/MainPage';
import SettingPage from './components/page/SettingPage';
import AccountPage from './components/page/AccountPage';
import BluzelleWrapper from './helper/BluzelleWrapper';

type Props = {};
export default class App extends React.Component<Props> {

  render() {

    return (
      <Provider store={createStore(reducers)}>
        <Router>
          <Stack key="main-stack">
            <Scene key="account-page" component={AccountPage} initial={true} />
            {/* <Scene key="main-page" component={MainPage} hideNavBar/> */}
            {/* <Scene key="setting-page" component={SettingPage} hideNavBar/> */}
          </Stack>
        </Router>
      </Provider>

    );
  }
}


