import React, { Component } from 'react';
import {
  Text, View, ScrollView, StyleSheet,
  Picker, Switch, Button, Animated, Alert
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Animatable from 'react-native-animatable';
import * as Notifications from 'expo-notifications';

class Reservation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      campers: 1,
      hikeIn: false,
      date: new Date(),
      showCalendar: false,
      //showModal: false, //when set to TRUE, modal is shown. WHen false, MOdal is hidden.
      scaleValue: new Animated.Value(0)
    };
  }

  animate() {
    Animated.timing(
      this.state.scaleValue,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      }
    ).start();
  }

  componentDidMount() {
    this.animate();
  }

  static navigationOptions = {
    title: 'Reserve A Campsite Below'
  }

  /*toggleModal() {
     this.setState({ showModal: !this.state.showModal });
   }*/

  handleReservation() {
    console.log(JSON.stringify(this.state));
    Alert.alert(
      "Begin Search?",
      `Number of Campers: ${this.state.campers}\n 
    Hike-In? ${this.state.hikeIn}\n
    Date: ${this.state.date.toLocaleDateString('en-US')}
    `,
      [
        {
          text: 'Cancel',
          onPress: () => this.resetForm(),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            this.presentLocalNotification(this.state.date.toLocaleDateString('en-US'));
            this.resetForm()
          }
        },
      ],
    )
    //this.toggleModal();
  }

  resetForm() {
    this.setState({
      campers: 1,
      hikeIn: false,
      date: new Date(),
      showCalendar: false
    });
  }

  async presentLocalNotification(date) {
    function sendNotification() {
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true
        })
      });

      Notifications.scheduleNotificationAsync({
        content: {
          title: 'Your Campsite Reservation Search',
          body: `Search for ${date} requested`
        },
        trigger: null //this causes the notification to fire immediately. this trigger property can be used a sched notification inth evuture, like time value, 30s in the future, can also be repeated.
      });
    }

    //PERMISSIONS. The only time you can use the AWAIT keyword is inside an async function, followed by a promise. It will stop execution of the function until the promise is fulfilled and returns a value. 
    let permissions = await Notifications.getPermissionsAsync();
    if (!permissions.granted) {
      permissions = await Notifications.requestPermissionsAsync();
    }
    if (permissions.granted) {
      sendNotification();
    }
  }

  render() {
    return (
      <ScrollView>
        <Animatable.View animation='zoomIn' duration={2000} delay={1000}>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Number of Campers</Text>
            <Picker
              style={styles.formItem}
              selectedValue={this.state.campers}
              onValueChange={itemValue => this.setState({ campers: itemValue })}
            >
              <Picker.Item label='1' value='1' />
              <Picker.Item label='2' value='2' />
              <Picker.Item label='3' value='3' />
              <Picker.Item label='4' value='4' />
              <Picker.Item label='5' value='5' />
              <Picker.Item label='6' value='6' />
            </Picker>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Hike-In?</Text>
            <Switch
              style={styles.formItem}
              value={this.state.hikeIn}
              trackColor={{ true: 'black', false: null }}
              onValueChange={value => this.setState({ hikeIn: value })}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Choose a Date</Text>
            <Button
              onPress={() =>
                this.setState({ showCalendar: !this.state.showCalendar })
              }
              title={this.state.date.toLocaleDateString('en-US')}
              color='#5637DD'
              accessibilityLabel='Tap me to select a reservation date'
            />
          </View>
          {this.state.showCalendar && (
            <DateTimePicker
              value={this.state.date}
              mode={'date'}
              display='default'
              onChange={(event, selectedDate) => {
                selectedDate && this.setState({ date: selectedDate, showCalendar: false });
              }}
              style={styles.formItem}
            />
          )}
          <View style={styles.formRow}>
            <Button
              onPress={() => this.handleReservation()}
              title='Searchhhh'
              color='black'
              accessibilityLabel='Tap me to search for available campsites to reserve'
            />
          </View>
          <View>

            < Button
              onPress={() => {
                this.resetForm();
              }}
              color='#5637DD'
              title='Close'
            />
          </View>
        </Animatable.View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 15,
    fontWeight: 'bold'
  },
  formLabel: {
    fontSize: 18,
    flex: 2
  },
  formItem: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "lightgray"
  }
});

export default Reservation;

/**
 *
 * class Reservation extends Component{
 * construction(props){
 * super(props);
 * this.state ={
 * campers: 1,
 *hikeIn: false,
date

set up a handle Event as handleReservation(){
  console.log(

    render(){
      return (
        <ScrollView></ScrollView>
        <Text> Number of Campers.
        <Picker> selectedValue={this.state.campers}
        onValueChange={itemValue => this.setState ({campers: itemValue})}
      )
    }
  )
}
}
 *
 *
 * }
 *


<Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.showModal}
            onRequestClose={() => this.toggleModal()}
          >
            <View style={styles.modal}>
              <Text style={styles.modalTitle}>Search Campsite Reservations</Text>
              <Text style={styles.modalText}>
                Number of Campers: {this.state.campers}
              </Text>
              <Text style={styles.modalText}>
                Hike-In?: {this.state.hikeIn ? 'Yes' : 'No'}
              </Text>
              <Text style={styles.modalText}>
                Date: {this.state.date.toLocaleDateString('en-US')}
              </Text>
              <Button
                onPress={() => {
                  this.toggleModal();
                  this.resetForm();
                }}
                color='#5637DD'
                title='Close'
              />
            </View>
          </Modal>
 * }
 */