import React, {useState, Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
  Dimensions,
  Image,
} from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import Colors from '../../constant/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
const imgShare = require('../../assets/images/share4.png');
const imgCloud = require('../../assets/images/cloud.png');
export default class DocumentTypeAScreen extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  render() {
    return (
      <ScrollView
        contentContainerStyle={{marginVertical: 20, marginHorizontal: 20}}>
        <TouchableOpacity
          style={styles.ContainerItem}
          onPress={this.toggleModal}>
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
        <Modal
          isVisible={this.state.isModalVisible}
          animationInTiming={500}
          animationOutTiming={500}
          style={{justifyContent: 'flex-end'}}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={{marginRight: 20}}>
              <View style={styles.buttonContainer}>
                <Icon name="eye" size={28} color="#fff" />
              </View>
              <Text style={styles.textModal}>Xem ngay</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginRight: 20}}>
              <View style={styles.buttonContainer}>
                <Image
                  source={imgShare}
                  style={{width: 28, height: 28, resizeMode: 'contain'}}
                />
              </View>
              <Text style={styles.textModal}>Chia sẻ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: 20}}>
              <View style={styles.buttonContainer}>
                <Image
                  source={imgCloud}
                  style={{width: 28, height: 28, resizeMode: 'contain'}}
                />
              </View>
              <Text style={styles.textModal}>Tải xuống</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.deleteContainer}>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={this.toggleModal}>
              <Text style={styles.deleteText}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
}
DocumentTypeAScreen.navigationOptions = () => {
  return {
    headerTitle: 'Tài Liệu Loại A',
  };
};
