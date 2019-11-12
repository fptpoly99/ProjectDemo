import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Colors from '../../constant/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function DocumentTypeAScreen(props) {
  return (
    <ScrollView
      contentContainerStyle={{marginVertical: 20, marginHorizontal: 20}}>
      <TouchableOpacity style={styles.ContainerItem}>
        <View style={{paddingHorizontal: 40}}>
          <Icon
            name="file"
            size={23}
            color="#0B3547"
            style={styles.iconFolder}
          />

          <Text style={styles.textItem}>Giới thiệu dự án</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ContainerItem}>
        <View style={{paddingHorizontal: 40}}>
          <Icon
            name="file"
            size={23}
            color="#0B3547"
            style={styles.iconFolder}
          />

          <Text style={styles.textItem}>Thông báo ngày 09-08</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContainerItem}>
        <View style={{paddingHorizontal: 40}}>
          <Icon
            name="file"
            size={23}
            color="#0B3547"
            style={styles.iconFolder}
          />

          <Text style={styles.textItem}>Điều khoản mua nhà</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
DocumentTypeAScreen.navigationOptions = () => {
  return {
    headerTitle: 'Tài Liệu Loại A',
  };
};
