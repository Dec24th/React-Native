import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function DirectoryRoom(props) {

  const renderDirectoryRoomItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        leftAvatar={{ source: require('./images/react-lake.job') }}
      />
    );
  };

  return (
    <FlatList
      data={props.rooms}
      renderItem={renderDirectoryRoomItem}
      keyExtractor={item => item.id.toString()}
    />
  );
}



export default DirectoryRoom;