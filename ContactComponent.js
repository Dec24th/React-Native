import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {
  render() {
    return (
      <ScrollView>
        <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
          <Card
            title='Contact Information Workshop1'
            wrapperStyle={{ margin: 20 }}
          >
            <Text>1 Nucamp Way</Text>
            <Text>Seattle, WASHINGTON 98001</Text>
            <Text style={{ marginBottom: 10 }}>USA</Text>
            <Text>Phone: 1-206-555-1234</Text>
            <Text>Email: campsites@nucamp.co</Text>
            <Button
              title="Send us an Email"
              buttonStyle={{ backgroundColor: 'black', margin: 40 }}
              icon={<Icon
                name='envelope-o'
                type='font-awesome'
                color='white'
                iconStyle={{ marginRight: 10 }}
              />}
              onPress={() => this.sendMail()}
            />
          </Card>
        </Animatable.View>
      </ScrollView>
    )
  }

  static navigationOptions = {
    title: 'Contact Us Here'
  }

  sendMail() {
    MailComposer.composeAsync({
      recipients: ['campsites@nucamp.co'],
      subject: 'Re: Inquiry',
      body: 'To whom it may concern:'
    })
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