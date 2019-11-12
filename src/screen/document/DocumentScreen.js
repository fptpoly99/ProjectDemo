import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import styles from './styles';
import Colors from '../../constant/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function DocumentScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Library')}
          style={styles.button1}>
          <Text style={styles.buttonText1}>Hình ảnh</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tài liệu</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 20, marginVertical: 10}}>
        <Icon name="search" size={15} color="#A7A9AB" style={styles.icon1} />
        <TextInput placeholder="Tìm tài liệu" style={styles.input1} />
      </View>
      <ScrollView>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('DocumentTypeA')}>
          <View
            style={{
              paddingHorizontal: 20,
              flexDirection: 'row',
              marginBottom: 23,
              width: '100%',
            }}>
            <Icon
              name="folder"
              size={23}
              color="#808284"
              style={styles.iconFolder}
            />
            <View style={styles.ContainerItem}>
              <Text style={styles.textItem}>Tài liệu loại A</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            marginBottom: 23,
            width: '100%',
          }}>
          <Icon
            name="folder"
            size={23}
            color="#808284"
            style={styles.iconFolder}
          />
          <View style={styles.ContainerItem}>
            <Text style={styles.textItem}>Tài liệu loại B</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            marginBottom: 23,
          }}>
          <Icon
            name="folder"
            size={23}
            color="#808284"
            style={styles.iconFolder}
          />
          <View style={styles.ContainerItem}>
            <Text style={styles.textItem}>Tài liệu loại C</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            marginBottom: 23,
          }}>
          <Icon
            name="folder"
            size={23}
            color="#808284"
            style={styles.iconFolder}
          />
          <View style={styles.ContainerItem}>
            <Text style={styles.textItem}>Tài liệu loại D</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
DocumentScreen.navigationOptions = () => {
  return {
    headerTitle: 'Tài Liệu',
  };
};
