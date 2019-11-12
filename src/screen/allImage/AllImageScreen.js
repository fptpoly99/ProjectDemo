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
          <Image source={image} style={styles.image} resizeMode="cover" />
          <View style={{paddingHorizontal: 10}}>
            <Text style={styles.title}>Tiến độ dự án</Text>
            <Text style={styles.total}>15 ảnh</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          marginBottom: 20,
          borderBottomColor: '#EBEBEB',
        }}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 17}}
         >
          <Image source={image} style={styles.image} resizeMode="cover" />
          <View style={{paddingHorizontal: 10}}>
            <Text style={styles.title}>Toàn cảnh</Text>
            <Text style={styles.total}>12 ảnh</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          marginBottom: 20,
          borderBottomColor: '#EBEBEB',
        }}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 17}}
         >
          <Image source={image} style={styles.image} resizeMode="cover" />
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
