import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
  return {
    campsites: state.campsites
  };
};

class Directory extends Component {

  //DIRECTORY NAV SCREEN THERE'S A HEADER WITH A TITLE, HERE WE CAN CONFIGURE THE TEXT FOR THAT TITLE USING THE STATIC KEYWORD. STATIC KEYWORD IS A JS KEYWORD THAT SETS A METHOD ON THE CLASS ITSELF RATHER THAN ON THE OBJECT THAT IS INSTANTIATED FROM THE CLASS
  static navigationOptions = {
    title: 'Directory Stuff'
  }

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <Animatable.View animation='fadeInRightBig' duration={1000}>
          <Tile
            title={item.name}
            caption={item.description}
            featured
            onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })} //the name of the screen to navigate to, the second is optional
            imageSrc={{ uri: baseUrl + item.image }}
          />
        </Animatable.View>
      );
    };

    if (this.props.campsites.isLoading) {
      return <Loading />;
    }
    if (this.props.campsites.errMess) {
      return (
        <View>
          <Text>{props.campsites.errMess}</Text>
        </View>
      );
    }

    return (
      <FlatList
        data={this.props.campsites.campsites}
        renderItem={renderDirectoryItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}

export default connect(mapStateToProps)(Directory);