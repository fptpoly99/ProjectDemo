import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import img from '../assets/images/fb.jpg';
import Colors from '../constant/Colors';

const ImageItem = props => {
  return (
    <View
      style={{flex: 1, justifyContent: 'space-around', flexDirection: 'row'}}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: props.image}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',

    overflow: 'hidden',
    marginLeft: 40,
   marginRight:30
  },
  image: {
    width: 92,
    height: 92,
    marginVertical:5,
    borderRadius:1,
   

    
  },

});

export default ImageItem;
