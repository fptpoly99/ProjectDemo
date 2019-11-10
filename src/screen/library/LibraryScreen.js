import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default function LibraryScreen(props) {
 
        return (
            <View>
                <Text style = {{fontFamily:'Montserrat-Bold'}}> textInComponent </Text>
            </View>
        )
            
}
LibraryScreen.navigationOptions = () =>{
    return{
        headerTitle:'Thư Viên',
        
    }
}