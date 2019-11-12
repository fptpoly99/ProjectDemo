import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constant/Colors';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default {
  button: {
    marginLeft: 20,
    marginHorizontal: 10,
    borderRadius: 50,
    width: 105,

    alignItems: 'center',
    height: 35,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  button1: {
    marginLeft: 20,
    marginHorizontal: 10,
    borderRadius: 50,
    width: 105,

    alignItems: 'center',
    height: 35,
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
  },
  container: {
    flex: 1,
    paddingTop: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
  },
  buttonText1: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#57585B',
  },

  input1: {
    width: '100%',
    height: 36,
    borderRadius: 3,
    paddingLeft: 45,
    borderWidth: 1,
    fontSize: 20,
    marginVertical: 15,

    fontFamily: 'Montserrat-Light',
    fontSize: 12,
    borderColor: '#E0E0E0',
  },

  icon1: {
    position: 'absolute',
    top: 25,
    left: 30,
  },
  iconFolder: {
    position: 'absolute',
    top: 10,
    left: 45,
  },
  ContainerItem: {
    borderBottomWidth: 0.3,
    height: 52,
    width: '80%',
    marginHorizontal:70,
    borderColor: '#A7A9AB',
  },
  textItem: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#0D100C',
    marginVertical: 10,
    paddingHorizontal: 5,
  },
};
