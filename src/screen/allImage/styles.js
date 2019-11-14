import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Colors from '../../constant/Colors'
export default {
    image: {
        width: 114,
        height: 114,
        marginRight: 13,
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
      },
      total:{
        fontFamily: 'Montserrat-Light',
        textAlign: 'center',
        color: '#57585B',
      },
      touableContainer:{
        borderBottomWidth: 1,
        marginBottom: 20,
        borderBottomColor: '#EBEBEB',
      },
      touable:{
        flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 17,
      }
}