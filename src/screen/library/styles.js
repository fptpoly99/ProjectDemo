import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Colors from '../../constant/Colors'
export default {
    container: {
        flex: 1,
        paddingTop: 25,
      },
      buttonContainer: {
        flexDirection: 'row',
      },
      button: {
        marginLeft:20,
        marginHorizontal: 10,
        borderRadius: 50,
        width: 105,
    
        alignItems: 'center',
        height: 35,
        justifyContent: 'center',
        backgroundColor: Colors.primary,
      },
      button1: {
        marginLeft:20,
        marginHorizontal: 10,
        borderRadius: 50,
        width: 105,
    
        alignItems: 'center',
        height: 35,
        justifyContent: 'center',
        backgroundColor: '#F2F2F2',
      },
      buttonText: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#fff',
      },
      buttonText1: {
        fontFamily: 'Montserrat-SemiBold',
      color:'#57585B'
      },
      image: {
        width: 114,
        height: 106 ,
        marginRight: 20,
      },
      textAlbum:{
        fontFamily: 'Montserrat-SemiBold',
        marginHorizontal: 20,
        marginTop: 10,
        color:'#57585B'
      },
      title:{
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        color: '#57585B',
        fontSize:12
      },
      total:{
        fontFamily: 'Montserrat-Light',
        textAlign: 'center',
        color: '#57585B',
        fontSize:12
      },
      allImage:{
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        color: '#57585B',
        fontSize: 12,
      }
}