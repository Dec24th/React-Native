import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
  render() {
    return (
      <ScrollView>
        <Card
          title='Contact Information Workshop1'
          wrapperStyle={{ margin: 20 }}
        >
          <Text>1 Nucamp Way</Text>
          <Text>Seattle, WASHINGTON 98001</Text>
          <Text style={{ marginBottom: 10 }}>USA</Text>
          <Text>Phone: 1-206-555-1234</Text>
          <Text>Email: campsites@nucamp.co</Text>
        </Card>
      </ScrollView>
    )
  }

  static navigationOptions = {
    title: 'Contact Us via email/'
  }

}

export default Contact;


/*

Make sure its from RNE or RN.

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

*/