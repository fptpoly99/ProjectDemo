import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constant/Colors';
const MODAL_HEIGHT = Dimensions.get('window').height / 4.5;

export default {
  iconFolder: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  ContainerItem: {
    borderBottomWidth: 0.3,
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
  modalContainer: {
    width: '100%',
    height: MODAL_HEIGHT,
    backgroundColor: '#fff',
    opacity: 0.8,
    marginVertical: 10,
    borderRadius: 12.5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#90CDF0',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  textModal: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    marginVertical: 5,
  },
  deleteContainer: {
    width: '100%',
    height: 57,
    borderRadius: 12.5,
    backgroundColor: '#fff',
  },
  deleteButton: {
    flex: 1,
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  deleteText:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: '#509ED6',
    textAlign: 'center',
  }
};
