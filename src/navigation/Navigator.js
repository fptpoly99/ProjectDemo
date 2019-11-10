import React from 'react';
import {Platform, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import LibraryScreen from '../screen/library/LibraryScreen';
import AllImageScreen from '../screen/allImage/AllImageScreen';
import ShowImageSecurity from '../screen/showImageSecurity/ShowImageSecurity';
import ShowImageOverview from '../screen/showImageOverview/ShowImageOverview';
import showImageSystem from '../screen/showImageSystem/ShowImageSystem';
const defaultStackNavOptions = {
    // headerStyle: {
    //   backgroundColor: Platform.OS === 'android' ? Color.accentColor : '',
    // },
    headerTitleStyle:{
      fontFamily: 'Montserrat-Italic'
    },
    // headerTintColor: Platform.OS === 'android' ? '#fff' : Color.primaryColor,
    // headerTitle: 'A Screen',
  };
const LibStackNavigator = createStackNavigator({
Library:LibraryScreen,
ImageOverview:ShowImageOverview,
ImageSecurity:ShowImageSecurity,
ImageSystem:showImageSystem

},{
    defaultNavigationOptions:defaultStackNavOptions
});
export default createAppContainer(LibStackNavigator);
