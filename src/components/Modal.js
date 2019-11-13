// import React, { Component } from 'react'
// import { Text, View,StyleSheet,Dimensions } from 'react-native';
// import PropTypes from 'react-native-modal';
// import moduleName from 'prop-types'
// const MODAL_HEIGHT = Dimensions.get('window').height/3;
// const Modal =({isVisible,onBackDropPress}) =>
//     (
//         <Modal isVisible = {isVisible}
//         onBackDropPress = {onBackDropPress}>
//             <View style = {styles.modalViewContainer}>
// <Text style = {{fontSize:34}}>fsdfsdfds</Text>
//             </View>
//         </Modal>
//     );
//     Modal.propTypes = {
//         isVisible: PropTypes.bool,
//         onBackDropPress:PropTypes.func,
//     }

// const styles = StyleSheet.create({
//     modalViewContainer:{
//         height:MODAL_HEIGHT,
//         width:'100%',
//         backgroundColor:'red',
//         borderRadius:12.5,
//         borderWidth:3
//     }
// })
// export default Modal;
import React, {Component} from 'react';
import {Button, Text, TouchableOpacity,View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../screen/documentTypeA/styles'
import Modal from 'react-native-modal';

export default class ModalTester extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity style = {{backgroundColor:'red',borderWidth:1,height:50}}  onPress = {this.toggleModal}><Text>fsdfsdfsdf</Text></TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{flex: 1}}>
           
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}
