import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';

function Mission() {

  return (
    <Card
      title='Our Mission Workshop1'>
      <Text
        style={{ margin: 10 }}
      >
        We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
      </Text>
    </Card>
  );
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: PARTNERS
    }
  }

  render() {
    const renderPartner = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: require('./images/bootstrap-logo.png') }}
        />
      )
    }
    return (
      <ScrollView>
        <Mission />
        <Card
          title='Community Partners'
        >
          <FlatList
            data={this.state.partners}
            renderItem={renderPartner}
            keyExtractor={item => item.id.toString()}
          />

        </Card>

      </ScrollView>
    )
  }





  static navigationOptions = {
    title: 'About Us - & Our His ssstory'
  }

}


export default About;

/*


function Mission() {

    return (
      <Card>
        <Text
          style={{margin: 10}}
        >
        We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
        </Text>
      </Card>
    );
  }
}


  render() {
    return (
      <ScrollView>
      <Card
        featuredTitle={'Contact Information'}
        wrapperStyle={{margin: 20}}
      >
        <Text>1 Nucamp Way</Text>
        <Text>Seattle, WA 98001</Text>
        <Text style={{ margiBottom: 10 }}>U.S.A.</Text>
        <Text>Phone: 1-206-555-1234</Text>
        <Text>Email: campsites@nucamp.co</Text>
      </Card>
      </ScrollView>
    )
  }

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: PARTNERS
    }
  }

  render() {
    const renderPartner = ({item}) => {
    return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: require('./images/bootstrap-logo.png') }}
        />
    )
  }








*/