import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';
import Colors from '../../constant/Colors';
const image = require('../../assets/images/images.png');
const img = require('../../assets/images/img1.jpg')
const img2 = require('../../assets/images/img2.jpg')
import ImageItem from '../../components/ImageItem';
const {height} = Dimensions.get('window').height;
export default function LibraryScreen(props) {
  const project = useSelector(state => state.project.availableProject);
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hình ảnh</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('Document')}
          style={styles.button1}>
          <Text style={styles.buttonText1}>Tài liệu</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textAlbum}>Album</Text>

      <ScrollView
        horizontal={true}
        style={{ margin: 18, height: 200}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ImageOverview')}>
          <Image
            source={require('../../assets/images/img1.jpg')}
            style={styles.image}
            resizeMode="cover"
          />

          <Text style={styles.title}>Tiến độ dự án</Text>
          <Text style={styles.total}>15 ảnh</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/img2.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.title}>Toàn cảnh</Text>
          <Text style={styles.total}>12 ảnh</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('../../assets/images/img2.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.title}>Hệ thống an ninh</Text>
          <Text style={styles.total}>35 ảnh</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity onPress={() => props.navigation.navigate('AllImage')}>
        <Text style={styles.allImage}>Xem tất cả ></Text>
      </TouchableOpacity>

      <View>
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            marginVertical: 15,
            paddingHorizontal: 20,
            color: '#57585B',
          }}>
          Tất cả ảnh
        </Text>
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={project}
        numColumns={4}
        renderItem={itemData => <ImageItem image={itemData.item.imageUrl} />}
      />
    </View>
  );
}
LibraryScreen.navigationOptions = () => {
  return {
    headerTitle: 'Thư Viên',
  };
};
