import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constant/Colors';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default {
  iconFolder: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  ContainerItem: {
    borderBottomWidth: 1,
    height: 48,
    width: '100%',
    borderColor: '#A7A9AB',
    marginBottom: 20,
  },
  textItem: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#1C1C1C',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
};
