import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import ImageItem from '../../components/ImageItem';
import {useSelector} from 'react-redux';
import Colors from '../../constant/Colors';

const ShowImageOverview = props => {
  const project = useSelector(state => state.project.availableProject);
  return (
    <View>
      <FlatList
        data={project}
        numColumns = {4}
        keyExtractor={item => item.id}
        renderItem={(itemData,index) => (
          <ImageItem image={itemData.item.imageUrl} />
        )}
      />
    </View>
  );
};
ShowImageOverview.navigationOptions = () =>{
  return{
    headerTitle:'Tiến độ dự án'
  }
}
export default ShowImageOverview;
