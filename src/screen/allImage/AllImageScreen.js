import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import styles from './styles';
const image = require('../../assets/images/fb.jpg');
const img1 = require('../../assets/images/img1.jpg');
const img2 = require('../../assets/images/img2.jpg');
export default function AllImage(props) {
  return (
    <ScrollView style={{paddingVertical: 17, padding: 20}}>
      <View
        style={{
          borderBottomWidth: 1,
          marginBottom: 20,
          borderBottomColor: '#EBEBEB',
        }}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 17}}
          onPress={() => props.navigation.navigate('ImageOverview')}>
          <Image source={img1} style={styles.image} resizeMode="cover" />
          <View style={{paddingHorizontal: 10}}>
            <Text style={styles.title}>Tiến độ dự án</Text>
            <Text style={styles.total}>15 ảnh</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.touableContainer}>
        <TouchableOpacity style={styles.touable}>
          <Image source={img2} style={styles.image} resizeMode="cover" />
          <View style={{paddingHorizontal: 10}}>
            <Text style={styles.title}>Toàn cảnh</Text>
            <Text style={styles.total}>12 ảnh</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={styles.touableContainer}>
        <TouchableOpacity
         style={styles.touable}>
          <Image source={img2} style={styles.image} resizeMode="cover" />
          <View style={{paddingHorizontal: 10}}>
            <Text style={styles.title}>Hệ thống an ninh</Text>
            <Text style={styles.total}>35 ảnh</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

AllImage.navigationOptions = () => {
  return {
    headerTitle: 'Tất cả album',
  };
};
