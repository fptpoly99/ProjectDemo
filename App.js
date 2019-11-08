import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Navigator from './src/navigation/Navigator';
import overviewReducers from './src/store/reducers/overview';
import projectReducers from './src/store/reducers/project';
import systemReducers from './src/store/reducers/system';
const rootReducers = combineReducers({
  overview: overviewReducers,
  project: projectReducers,
  project: systemReducers,
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
