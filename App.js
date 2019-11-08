import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
export default class App extends Component {
  render() {
    return (
      <View>
       
        <ScrollableTabView>
          <Text tabLabel="Tab #1">My</Text>
          <Text tabLabel="Tab #2 word word">favorite</Text>
          <Text tabLabel="Tab #3 word word word">project</Text>
          <Text tabLabel="Tab #4 word word word word">favorite</Text>
          <Text tabLabel="Tab #5">project</Text>
        </ScrollableTabView>
      </View>
    );
  }
}
