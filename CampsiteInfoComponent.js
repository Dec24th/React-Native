import React, { Component } from 'react';

import { Text, View, ScrollView, FlatList } from 'react-native';

import { Card, Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
  return {
    campsites: state.campsites,
    comments: state.comments
  };
};

function RenderCampsite(props) {

  const { campsite } = props;

  if (campsite) {
    return (
      <Card
        featuredTitle={campsite.name}
        image={{ uri: baseUrl + campsite.image }}
      >
        <Text style={{ margin: 10 }}>
          {campsite.description}
        </Text>
        <Icon
          name={props.favorite ? 'heart' : 'heart-o'}
          type='font-awesome'
          color='blue'
          //raised
          //reverse
          onPress={() => props.favorite ?
            console.log('Already set as a favorite') : props.markFavorite()}
        />
      </Card>
    );
  }
  return <View />;
}

function RenderComments({ comments }) {

  const renderCommentItem = ({ item }) => {
    return (
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 14 }}>{item.text}</Text>
        <Text style={{ fontSize: 11 }}>{item.rating} Stars</Text>
        <Text style={{ fontSize: 10 }}>{`-- ${item.author}, ${item.date}`}</Text>
      </View>
    );
  }

  return (
    <Card title='Comments Here Here!'>
      <FlatList
        data={comments} //for its data prop, give it the comments array
        renderItem={renderCommentItem} //
        keyExtractor={item => item.id.toString()} //because all comments have a unoq id, set this to set the id for that unik key
      />
    </Card>
  )
}

class CampsiteInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    };
  }

  markFavorite() {
    this.setState({ favorite: true })
  }

  static navigationOptions = {
    title: 'Campsite Information Below'
  }

  render() {
    const campsiteId = this.props.navigation.getParam('campsiteId');
    const campsite = this.props.campsites.campsites.filter(campsite => campsite.id === campsiteId)[0];
    const comments = this.props.comments.comments.filter(comment => comment.campsiteId === campsiteId); //this rsutls in array of all comments that match this particular campsiteId
    return (
      <ScrollView>
        <RenderCampsite campsite={campsite}
          favorite={this.state.favorite}
          markFavorite={() => this.markFavorite()}
        />
        <RenderComments comments={comments} />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(CampsiteInfo);

/**
Icons

ScrollView.
cards.
 */