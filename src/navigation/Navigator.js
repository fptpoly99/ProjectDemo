import React from 'react';
import {Platform, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import LibraryScreen from '../screen/library/LibraryScreen';
import AllImageScreen from '../screen/allImage/AllImageScreen';
import ShowImageSecurity from '../screen/showImageSecurity/ShowImageSecurity';
import ShowImageOverview from '../screen/showImageOverview/ShowImageOverview';
import showImageSystem from '../screen/showImageSystem/ShowImageSystem';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import DocumentTypeAScreen from '../screen/documentTypeA/DocumentTypeAScreen';
import DocumentScreen from '../screen/document/DocumentScreen'
import Colors from '../constant/Colors'
const defaultStackNavOptions = {
  // headerStyle: {
  //   backgroundColor: Platform.OS === 'android' ? Color.accentColor : '',
  // },
  headerTitleStyle: {
    fontFamily: 'Montserrat-SemiBold',
    
  },


  // headerTitle: 'A Screen',
};

// const TabNavigator = createMaterialTopTabNavigator(
//   {
//     feed: {
//       screen: showImageSystem,
//     },
//     profile: {
//       screen: LibraryScreen,
//       navigationOptions:{
      
//       }
//     },
   
//   },
//   {
//     tabBarPosition: 'top',
//     swipeEnabled: true,
//     animationEnabled: true,
//     tabBarOptions: {
//       activeTintColor: '#fff',
//       inactiveTintColor: '#A6A6A6',
//       showLabel: true,
//       upperCaseLabel: false,
//       style: {
//         backgroundColor: '#fff',
//         shadowColor: '#fff',
//         height: 42,
//         width:300,
//         marginHorizontal:20,
//         borderWidth:1,
//         shadowOffset: {
//           width: 0,
//           height: 0,
//         },
//         shadowOpacity: 0,
//         shadowRadius: 0,
//         elevation: 0,
//         marginTop: 10,
//         // paddingBottom: 5,
//       },
//       indicatorStyle: {
//         backgroundColor: Colors.primary,
//         height: 34,
//         borderRadius: 30,
//       },
//       labelStyle: {
//         fontFamily: 'montserratSemiBold',
//         flexWrap: 'nowrap',
//       },
//       tabStyle: {
//         alignSelf: 'center',
//       },

//       // activeTabStyle: { backgroundColor: '#545f68' },
//       // activeBackgroundStyle: { backgroundColor: '#545f68' },
//       // inactiveBackgroundStyle: { backgroundColor: '#fff' },
    
//     },
//   },
// );
//
const LibStackNavigator = createStackNavigator(
  {
    Library: LibraryScreen,
    AllImage:AllImageScreen,
    ImageOverview: ShowImageOverview,
    ImageSecurity: ShowImageSecurity,
    ImageSystem: showImageSystem,
    Document:DocumentScreen,
    DocumentTypeA:DocumentTypeAScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

export default createAppContainer(LibStackNavigator);
