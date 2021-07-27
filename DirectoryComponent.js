import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

class Directory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES
    };
  }
  //DIRECTORY NAV SCREEN THERE'S A HEADER WITH A TITLE, HERE WE CAN CONFIGURE THE TEXT FOR THAT TITLE USING THE STATIC KEYWORD. STATIC KEYWORD IS A JS KEYWORD THAT SETS A METHOD ON THE CLASS ITSELF RATHER THAN ON THE OBJECT THAT IS INSTANTIATED FROM THE CLASS
  static navigationOptions = {
    title: 'Directory Amos'
  }

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
          leftAvatar={{ source: require('./images/react-lake.jpg') }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.campsites}
        renderItem={renderDirectoryItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}

export default Directory;