import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Navigator from './src/navigation/Navigator';

import projectReducers from './src/store/reducers/project';

const rootReducers = combineReducers({
  project: projectReducers,

});
const store = createStore(rootReducers);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Navigator />
    </Provider>
    );
  }
}
